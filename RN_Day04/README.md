#react-native学习笔记Day04 2016-07-15
###react-native TextInput 的使用


案例:搜索输入框的使用TextInput 组件实现
***
 >###1. 遇到的问题 ### 
 >  + 在IOS中TextInput不能输入,但是在android中可以正常输入
 >  + 多次实验对比后发现在ios中TextInput组件必须给定高度才能正常输入  
 
 
 >###2. 待续..###


```javascript
  hide(value) {
    this.setState({
      show: false,
      value: value,
    });
  }

  getValue(text) {
    this.setState({
      show: true,
      value: text,
    });
 ```

| 相关连接 | 连接地址 |
|----------|----------|
| 在线模拟测试         |  [rnplay](https://rnplay.org/apps)        |

