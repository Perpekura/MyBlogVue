<template>
    <Tabs type="card" :animated="false">
        <TabPane label="前端">
        <Tag checkable color="primary">html</Tag>
            <Tag checkable color="success">css</Tag>
            <Tag checkable color="error">vue</Tag>
            <Tag checkable color="warning">webpack</Tag>
        </TabPane>
        <TabPane label="后端">
          <Tag checkable color="primary">java</Tag>
              <Tag checkable color="success">c++</Tag>
              <Tag checkable color="error">c#</Tag>
              <Tag checkable color="warning">php</Tag>
        </TabPane>
        <TabPane label="游戏开发">
         <Tag checkable color="primary">Unity</Tag>
             <Tag checkable color="success">UE4</Tag>
             <Tag checkable color="error">Cocos2d</Tag>
             <Tag checkable color="warning">Rpgmaker</Tag>
        </TabPane>
		<TabPane label="文章">
		<Tag checkable color="primary">生活</Tag>
		    <Tag checkable color="success">感想</Tag>
		    <Tag checkable color="error">小说</Tag>
		    <Tag checkable color="warning">评测</Tag>
		</TabPane>
    </Tabs>
</template>
<script>
    export default {

    }
</script>
