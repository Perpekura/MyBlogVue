<template>
  <div class="Login">
    <div class="Login_container">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>

        <div class="formSon">
          <FormItem prop="name">
            <Input v-model="formInline.user" placeholder="用户名"></Input>
          </FormItem>
        </div>
        <div class="formSon">
          <FormItem prop="passwd">
            <Input type="password" v-model="formInline.password" placeholder="密码"></Input>

          </FormItem>
        </div>

        <div class="formSon">
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            <Button @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          password: ''
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
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Login {
    margin: 44px auto;
    padding-top: 20px;
    border-radius: 5px;
    width: 80%;
    background: #FFF;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);
    text-align: center;
  }

  .Login_container {}
  .formSon{

  }
</style>
