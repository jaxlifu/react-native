#react-native 学习笔记  2016/07/21
###1.react-native-swiper 轮播组件的使用
[react-native-swiper](https://github.com/leecade/react-native-swiper)  
建议后期自己封装,实现起来还是蛮简单的  

>#### 图片地址:来自淘宝的几张图片 ####
```
https://img.alicdn.com/tps/TB16FcnKVXXXXaTXpXXXXXXXXXX-520-280.png
https://img.alicdn.com/tps/TB1iFEbKVXXXXbLXVXXXXXXXXXX-520-280.jpg
https://aecpm.alicdn.com/simba/img/TB1Yl.AKVXXXXbaXFXXSutbFXXX.jpg
https://aecpm.alicdn.com/simba/img/TB1jIrUKVXXXXXEXVXXSutbFXXX.jpg
```
+ ### 使用方法  
	1. 安装 在项目的package.json 的目录下运行  
	```$ npm i react-native-swiper --save```  

	2. 使用: 导入模块  

	```import Swiper from 'react-native-swiper'```  

	3. 使用示例:
	```
	 <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>

      var styles = StyleSheet.create({
		  wrapper: {
		  },
		  slide1: {
		    flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center',
		    backgroundColor: '#9DD6EB',
		  },
		  slide2: {
		    flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center',
		    backgroundColor: '#97CAE5',
		  },
		  slide3: {
		    flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center',
		    backgroundColor: '#92BBD9',
		  },
		  text: {
		    color: '#fff',
		    fontSize: 30,
		    fontWeight: 'bold',
		  }
		})
	```

	4. 更多属性  

	#### Basic

	| Prop  | Default  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| horizontal | true | `bool` | If `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column. |
	| loop | true | `bool` | Set to `false` to disable continuous loop mode. |
	| index | 0 | `number` | Index number of initial slide. |
	| showsButtons | false | `bool` | Set to `true` make control buttons visible. |
	| autoplay | false | `bool` | Set to `true` enable auto play mode. |

	#### Custom basic style & content

	| Prop  | Default  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| width | - | `number` | If no specify default enable fullscreen mode by `flex: 1`. |
	| height | - | `number` | If no specify default fullscreen mode by `flex: 1`. |
	| style | {...} | `style` | See default style in source. |

	#### Pagination

	| Prop  | Default  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| showsPagination | true | `bool` | Set to `true` make pagination visible. |
	| paginationStyle | {...} | `style` | Custom styles will merge with the default styles. |
	| renderPagination | - | `function` | Complete control how to render pagination with three params (`index`, `total`, `context`) ref to `this.state.index` / `this.state.total` / `this`, For example: show numbers instead of dots. |
	| dot | `<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />` | `element` | Allow custom the dot element. |
	| activeDot | `<View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />` | `element` | Allow custom the active-dot element. |

	#### Autoplay

	| Prop  | Default  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| autoplay | true | `bool` | Set to `true` enable auto play mode. |
	| autoplayTimeout | 2.5 | `number` | Delay between auto play transitions (in second). |
	| autoplayDirection | true | `bool` | Cycle direction control. |

	#### Control buttons

	| Prop  | Default  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| showsButtons | true | `bool` | Set to `true` make control buttons visible. |
	| buttonWrapperStyle | `{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'}` | `style` | Custom styles. |
	| nextButton | `<Text style={styles.buttonText}>›</Text>` | `element` | Allow custom the next button. |
	| prevButton | `<Text style={styles.buttonText}>‹</Text>` | `element` | Allow custom the prev button. |

	#### Props of Children

	| Prop  | Default  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| style | {...} | `style` | Custom styles will merge with the default styles. |
	| title | {<Text numberOfLines={1}>...</Text>} | `element` | If this parameter is not specified, will not render the title. |

	#### Basic props of `<ScrollView />`

	| Prop  | Default  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| horizontal | true | `bool` | If `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column. |
	| pagingEnabled | true | `bool` | If true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.  |
	| showsHorizontalScrollIndicator | false | `bool` | Set to `true` if you want to show horizontal scroll bar. |
	| showsVerticalScrollIndicator | false | `bool` |  Set to `true` if you want to show vertical scroll bar. |
	| bounces | false | `bool` | If `true`, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. If `false`, it disables all bouncing even if the alwaysBounce* props are true.  |
	| scrollsToTop | false | `bool` | If true, the scroll view scrolls to top when the status bar is tapped.  |
	| removeClippedSubviews | true | `bool` | If true, offscreen child views (whose overflow value is hidden) are removed from their native backing superview when offscreen. This canimprove scrolling performance on long lists.  |
	| automaticallyAdjustContentInsets | false | `bool` | Set to `true` if you need adjust content insets automation. |

	> @see: http://facebook.github.io/react-native/docs/scrollview.html

	#### Supported ScrollResponder

	| Prop  | Params  | Type | Description |
	| :------------ |:---------------:| :---------------:| :-----|
	| onScrollBeginDrag | `e` / `state` / `context` | `function` | When animation begins after letting up |
	| onMomentumScrollEnd | `e` / `state` / `context` | `function` | Makes no sense why this occurs first during bounce |
	| onTouchStartCapture | `e` / `state` / `context` | `function` | Immediately after `onMomentumScrollEnd` |
	| onTouchStart | `e` / `state` / `context` | `function` | Same, but bubble phase |
	| onTouchEnd | `e` / `state` / `context` | `function` | You could hold the touch start for a long time |
	| onResponderRelease | `e` / `state` / `context` | `function` | When lifting up - you could pause forever before * lifting |

	> Note: each ScrollResponder be injected with two params: `state` and `context`, you can get `state` and `context`(ref to swiper's `this`) from params, for example:

	```jsx
	var swiper = React.createClass({
	  _onMomentumScrollEnd: function (e, state, context) {
	    console.log(state, context.state)
	  },
	  render: function() {
	    return (
	      <Swiper style={styles.wrapper}
	      onMomentumScrollEnd ={this._onMomentumScrollEnd}
	     ...
	      </Swiper>
	    )
	  }
	})
	```
