#react-native 学习笔记  2016-07-20 周三 
###1.react-native-tab-navigator的使用 IOS中有TabBarIOS和TabBarIOS.Item 但是按的肉中没有对应的组件,官方认为没有必要强行同意风格,而改变原生的设计,但是现在的设计给的内容多是和iod的底部导航相关,所以出现了react-native-tab-navigator组件
[github地址](https://github.com/exponentjs/react-native-tab-navigator)  

+ ####使用方法   

	1.安装: 在项目的package.json 的目录下运行  
	```npm install react-native-tab-navigator --save```  

	2.使用: 导入模块  
	```import TabNavigator from 'react-native-tab-navigator';```  

	3.使用示例:  
	```
	<TabNavigator>
	  <TabNavigator.Item
	    selected={this.state.selectedTab === 'home'}
	    title="Home"
	    renderIcon={() => <Image source={...} />}
	    renderSelectedIcon={() => <Image source={...} />}
	    badgeText="1"
	    onPress={() => this.setState({ selectedTab: 'home' })}>
	    {homeView}
	  </TabNavigator.Item>
	  <TabNavigator.Item
	    selected={this.state.selectedTab === 'profile'}
	    title="Profile"
	    renderIcon={() => <Image source={...} />}
	    renderSelectedIcon={() => <Image source={...} />}
	    renderBadge={() => <CustomBadgeView />}
	    onPress={() => this.setState({ selectedTab: 'profile' })}>
	    {profileView}
	  </TabNavigator.Item>
	</TabNavigator>
	```  

	4.隐藏Tab Bar
	```
	let tabBarHeight = 0;
	<TabNavigator
	  tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
	  sceneStyle={{ paddingBottom: tabBarHeight }}
	/>
	```

+ ####使用中问题总结 

	1.renderIcon 显示的会比图片大,应该是分辨率问题,设置图片大小为默认px的1/2基本正常,具体的原因还没有深究  

	2.待定  
