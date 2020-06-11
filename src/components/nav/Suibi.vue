<template>
  <div class="bowen_body">

    <div class="data_select">
      <span>
        按日期查询：
      </span>
      <Row>
        <Col span="12">
        <DatePicker type="date" placeholder="Select date" style="width: 200px" ></DatePicker>
        </Col>
      </Row>

    </div>
    <div class="suibi_list">
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
          <ListItemMeta :avatar="item.avatar" :title="item.title" />
          {{ item.content }}
          <template slot="action">
            <li>
              <Icon type="ios-star-outline" /> 123
            </li>
            <li>
              <Icon type="ios-thumbs-up-outline" /> 234
            </li>
            <li>
              <Icon type="ios-chatbubbles-outline" /> 345
            </li>
          </template>
        </ListItem>
      </List>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [{
            title: 'This is title 1',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          },
          {
            title: 'This is title 2',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          },
          {
            title: 'This is title 3',
            description: 'This is description, this is description, this is description.',
            avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
            content: 'This is the content, this is the content, this is the content, this is the content.'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bowen_body {
    margin: 30px;
  }

  .data_select {
    line-height: 40px;

    padding: 10px;
    z-index: 100;
    background: white;
    display: flex;
    justify-content: space-around;
    margin-top: 44px;
    border-radius: 5px;
    span{
      font-size: 20px;
      font-family: "微软雅黑";
    }
  }

  .suibi_list {
    margin-top: 5px;
    background-color: white;
    border-radius: 5px;
    padding: 10px;

  }
</style>
