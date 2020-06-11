<template>
  <div class="liuyan_body">
    <div class="huifu">
      <Form>
        <FormItem label="Text">
          <Input class="username" type="text" v-model="user" placeholder="用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
          <Input class="usertext" v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="留言内容......"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="postComment">评论</Button>
          <Button style="margin-left: 8px" @click="clearComment">清空</Button>
        </FormItem>
      </Form>
    </div>
    <div class="liuyanlist">
      <List item-layout="vertical">
        <div class="liuyanlistDiv">
          <ListItem v-for="item in data" :key="item.time">
            <ListItemMeta :avatar="item.avatar" :title="item.username" />
            {{ item.content }}
            <template slot="action">
              <li>
                {{ item.time |dataFormat}}
              </li>
              <li>
                <a href="" v-on:click.prevent="">回复</a>
              </li>
              <li>
                <a href="" @click.prevent="">删除</a> <!-- 无登录用hadden隐藏删除功能 -->
              </li>

            </template>

          </ListItem>
        </div>
      </List>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
    this.loadComment()
    },
    data() {
      return {
        user:'',
        kongContent:'',
        data: [{
            username: '',
            avatar: '',
            content: '暂无评论！',
            time: '',
          },
        ],

        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        },
        ruleInline: {
          user: [{
            required: true,
            message: 'Please fill in the user name',
            trigger: 'blur'
          }],
          password: [{
              required: true,
              message: 'Please fill in the password.',
              trigger: 'blur'
            },
            {
              type: 'string',
              min: 6,
              message: 'The password length cannot be less than 6 bits',
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      //从本地加载评论
      loadComment(){
          var list=JSON.parse(localStorage.getItem('cmts')||'[]')

            this.data=list


      },
      //使用localStorge模拟提交评论
      postComment() {
        var comment={username:this.user,avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',content:this.formItem.textarea,time:new Date(),}
        //从
        var list=JSON.parse(localStorage.getItem('cmts')||'[]')

        if (this.user&&this.formItem.textarea) {
          list.unshift(comment)

          localStorage.setItem('cmts',JSON.stringify(list))

          this.$Message.success('发表成功！');
          this.loadComment()
          this.formItem.textarea=''
        } else{
          this.$Message.error('用户名或评论内容不能为空！');
        }

      },
      //清除评论内容
      clearComment(){
        this.formItem.textarea=''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .liuyan_body {}

  .huifu {
    margin: 0 auto;
    width: 90%;
    .username{
      margin-bottom: 10px;
    }
  }

  .liuyanlist {
    margin: 22px auto;
    width: 90%;
    height: 90%;

    background: white;
    padding: 20px;

    border-radius: 5px;
    .liuyanlistDiv{
    }
  }
</style>
