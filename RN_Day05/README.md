#react-native学习笔记Day05 2016-07-16
###react-native Image 和TouchableHighlight TouchableOpacity 的使用

案例:实现图片手动切换效果 
***
 >###1. 遇到的问题 ### 
 >  + 
 >  +   
 
 
 >###2. 待续..###


```javascript
   //显示下一张图片
  showNext(position) {
    position++;
    console.log(position);
    if (position < MAX_LENGTH) {
      this.setState({
        position: position,
      });
      console.log(position);
    } else {
      alert('没有下一张了!');
    }

  }

  //显示上一张图片
  showPrevious(position) {
    position--;
    console.log(position);
    if (position >= MIN_LENGTH) {
      this.setState({
        position: position,
      });
      console.log(position);
    } else {
      alert('没有上一张了!');
    }

  }

  //这边更据position去imageList中获取内容
  render() {
    return (
      <View style={styles.container}>
       <Image 
         style={[styles.image]}
         resizeMode={'contain'}
         defaultSource={require('./images/ic_loading.jpg')}
         source={{uri:imageList[this.state.position]}}
       />
        <View style={[styles.row]}>
          <TouchableOpacity style={[styles.button]} onPress={this.showPrevious.bind(this,this.state.position)}> 
            <Text>上一张</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={this.showNext.bind(this,this.state.position)}>
            <Text>下一张</Text>
          </TouchableOpacity>
        </View> 
        </View>
    );
  }
}
 ```

| 相关连接 | 连接地址 |
|----------|----------|
| React.js         |  [菜鸟教程](http://www.runoob.com/react/react-tutorial.html)        |

