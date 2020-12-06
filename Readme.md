Ionic-vue GitHub 地址

#### 编译

```
ionic build
```

### 创建ios、android项目
```
ionic cap add ios
ionic cap add android
```

### 代码更新
```
ionic cap copy
```

### 插件同步
```
ionic cap sync
```

#### 模拟器链接
```
ionic cap run ios -l --external
ionic cap run android -l --external
```

#### 字体颜色类名： theme/common.less
```
.u-red 
.u-white
.u-green
.u-blue
.u-orange
```

#### 背景颜色类名： theme/common.less
```
.u-red-bg 
.u-white-bg
.u-green-bg
.u-blue-bg
.u-orange-bg
```

#### margin 和padding的类名：theme/common.less
```
.margin-left-1     到   .margin-left-100
.margin-right-1    到   .margin-right-100
.margin-bottom-1   到   .margin-bottom-100
.margin-top-1      到   .margin-top-100
.margin-1          到   .margin-100

.padding-left-1    到   .padding-left-100
.padding-right-1   到   .padding-right-100
.padding-bottom-1  到   .padding-bottom-100
.padding-top-1     到   .padding-top-100
.padding-1         到   .padding-100
```

#### 弹性盒子的类名：theme/common.less
需组合使用

```
.flex-row
.flex-row-start
.flex-row-end
.flex-row-between
.flex-row-around
.flex-row-evenly
.flex-column
.flex-column-start
.flex-column-end
.flex-column-center
.flex-row-between-center
```

#### 文字对齐方式 :theme/common.less
```
.text-align-left
.text-align-center
.text-align-right
```


#### 下边框线:theme/common.less
```
.border-bottom
```

#### css省略号
```
.u-line-1   一行
.u-line-2   两行
```


Ui组件可参考 [vant3](https://vant-contrib.gitee.io/vant/next/#/zh-CN) 和  [ionic 官网https://ionicframework.com/docs/components]()

