#react-native学习笔记Day01 2016-07-13
>>>>>>> 821375130f7727bd49a9b7fe01147d48d8de903a
###react-native Text 的使用
1.Text组件主要作用于显示文本,具有响应性,可以嵌套,可以继承  
内部Text组件可以继承外部Text的样式  
Text组件的特性  
1.onPress  
2.numberOfLines 显示多少行  
3.onLayout  

案例:网易新闻客户端Text 组件实现
***
 >0.组件的颗粒设计主要取决应用的结构设计  
 >1.头部文件封装   
 ```
module.exports = Header;  
const Header = require('./header');
  ```  
 >2.待续...