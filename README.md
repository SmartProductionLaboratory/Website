This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# More about website

網頁由`React.js`寫成，在`React.js`中，每個網頁中的元件稱為`component`。網頁是由許多components組合而成。合成所有components的檔案是`index.js`

## Index.js

在`index.js`中組合所有components

```javascript=
ReactDOM.render(
  <React.StrictMode>
    {/* <App />, */}
    <Home/>
    <Works/>
    <Professor/>
    <Experience/>
    <MSstudent/>
    <UGstudent/>
    <LabCarousel/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Home
> File : Home.js
 
`Home`這個component由3個元件組成，分別是`Nvbar`, `HomeContent`, `Research`。

```javascript=
class Home extends React.Component{
    render(){
        return (
            <div id="Home" style={{backgroundImage:`url(${Background})`}}>
                <Nvbar />
                <HomeContent/>
                <Research />
            </div>
        ); 
    }
}
```

### Nvbar 

> File : Nvbar.js

![](https://i.imgur.com/lQQd5aW.png) 




### HomeContent

> File : HomeContent.js

![](https://i.imgur.com/5YSEb0j.jpg)

line 5 : 實驗室名稱
line 6 : 實驗室英文名稱
line 8 : 學校名稱
其他以此類推

```javascript=
class HomeContent extends React.Component{
    render() {
        return (
            <Jumbotron id="jumbotron" style={{backgroundColor:"transparent", textAlign:"center"}}>
                    <h1>智慧生產實驗室</h1> 
                    <h2>Smart Production Laboratory</h2>
                    <br/><br/>
                    <h3>National Cheng Kung University </h3>
                    <h4>College of Electrical Engineering &#38; Computer Science</h4>
                    <h5>lsInstitute of Manufacturing Information and Systems</h5>
                    <h6>
                        Department of Computer Science and Information Engineering
                    </h6>
                </Jumbotron>
);
    }
}
```

### Research

> File : research.js

![](https://i.imgur.com/uIelgYB.png)

```javascript=
class research extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.outerWidth,
            height: window.outerHeight,
            research :{
                "Data Mining" : {
                    "title" : "Data Mining 資料探勘",
                    "text" : "我們透過收集生產過程中批貨於各站點的生產資料，進行資料篩選、遺漏值處理與資料分類等資料探勘的技術後建立良率預測模型，以分析影響批貨最終良率的因子，提升製造業生產線的良率。"
                },
                "Scheduling" : {
                    "title" : "Scheduling 排程",
                    "text" : "隨著半導體製程隨著科技發展愈趨繁複，我們開發高效率的演算法解決製造業瓶頸產線排程問題，同時考量製程繁雜的生產限制，並在短時間內得到滿意解或是最佳解。"
                }
            }   
        }
    }
    render(){
    
 ...
```

## Works

> File : Works.js

![](https://i.imgur.com/LIcuTZ6.png)

可以直接在 `projects` 這個array中直接加一個row，新加的東西就會直接呈現在網頁上

```javascript=
class Works extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects : [
                ["工業技術研究院", "金屬加工產業先進排程啟發式演算法研究"],
                ["天工精密股份有限公司", "鋼珠製造廠生產排程最佳化決策支援系統"],
                ["協雲科技股份有限公司", "製鞋廠生產排程最佳化決策支援系統"],
                ["天源義記機械股份有限公司", "動力傳動鏈條配件廠生產排程最佳化決策支援系統"],
                // ["鋼珠製造廠生產排程最佳化決策支援系統", "鋼珠製造廠生產排程最佳化決策支援系統"],
                ["科技部", "製鞋智動化機電系統暨網宇虛實整合開發計畫 (1/3~3/3)"],
                ["科技部", " 動力傳動與輸送鏈條製造廠生產排程與模擬系統(1/2~2/2)"],
                ["科技部","新興科技創新營運模式－台灣智慧製造創新營運中心-總計畫及子計畫二、四、五 (3/4~4/4)"],
                ["科技部", "薄膜電晶體液晶顯示器薄膜廠微影製程站排程最佳化及其決策支援系統"],
                ["友達光電股份有限公司", "TFT-LCD Array生產規劃與排程之改善與解決方案"],
                ["普生股份有限公司", "生物晶片生產排程"],
                ["創意電子股份有限公司", "IC設計系統資源之排程控制策略整合與發展"],
                ["台灣積體電路股份有限公司", "應用基因演算法改善派工與排程問題"],
                ["台達電子工業股份有限公司", "先進智能製造系統規劃建議"],
                ["晶元光電股份有限公司", "建立LED廠跨廠區人力資源需求模型"],
                ["晶元光電股份有限公司", "應用先進製程控制降低半導體線寬與覆蓋誤差"]
            ]
        }
    }

    render(){
        return (<div id="Works">
 ...
```

## Professor

> File : Professor.js

![](https://i.imgur.com/cJzoSsL.png)


老師的基本資料包含照片、聯絡資訊研究興趣等等

聯絡資訊可以直接修改`Professor.js`裡的內容
```javascript=
class Professor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width : window.outerWidth,
            height : window.outerHeight,
            phone : "06-2757575 ext 34220",
            email : "hkwang@gs.ncku.edu.tw",
            address : "701台南市東區大學路1號自強校區儀器設備大樓95602",
        }


    }
 
```

### ProfessorImg 

> File : Professor_img.js

老師的照片寫在裡面，在13行的地方會去檢查網頁的大小，如果寬度小於800px，則使用小張的照片，否則都是使用大張的照片

```javascript=
class ProfessorImg extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width : window.outerWidth,
            height : window.outerHeight
        }
    }

    render(){
        var img;
        console.log(this.state)
        if(this.state.width < 800){
            img = ProImg2
        }else{
            img = ProImg
        }
... 
```

### ResearchInterests

> File : ResearchInterests.js

網頁中的研究興趣可直接修改程式裡的內容

```javascript=
class ResearchInterests extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width : window.outerWidth,
            height : window.outerHeight,
            researchInfo : [
                "生產規劃與排程 Production planning and scheduling", 
                "資料挖礦與大數據分析 Data mining and big data analysis", 
                "萬用啟發式演算法 Metaheuristic algorithm", 
                "先進製程控制 Advanced process control", 
                "決策分析 Decision analysis",
                // "金門旅遊 Kinmen Tourism Guideline"
            ]
        }
    }
```

## Experience.js

> File : experience.js

![](https://i.imgur.com/pqCFQYZ.png)


網頁中的工作經驗可以直接在這裡修改

```javascript=
class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.outerWidth,
            height: window.outerHeight,
            researchExp : [
                `德國哈根大學 博士後研究員 2017`, 
                `國立清華大學 工業工程與管理博士班 2016`,
                `國立清華大學 工業工程與管理碩士班 2010`,
                `國立交通大學 工業工程與管理學系 2008`
            ],

            workExp : [
                `國立成功大學製造資訊與系統研究所助理教授 2020`,
                `逢甲大學工業工程與管理學系助理教授 2018`, 
                `裕隆汽車製造股份有限公司工業工程師 2012`, 
                `台灣積體電路製造股份有限公司製造部課長 2011`
            ]
        }
    }

    render(){
        if(this.state.width < 800){
 ...
```

## MSStudents

> File : MSStudents.js

![](https://i.imgur.com/p0JhT4C.png)

可以在line 5的array中新增一些同學。新增的方式如下：

1. Clone the repo and add the photos into the `src/imgs/` directory
2. import the photos like the code shown in line 1~4
3. Edit the content of array of students declared at line 10

```javascript=
import jrimg from './imgs/zrl.png'
import gcimg from './imgs/jc.png'
import pgimg from './imgs/pg.png'
import nckuimg from './imgs/NCKU.png'

class MSstudents extends React.Component{
    constructor(props){
        super(props);

        let students = [ 
                {img : jrimg, name : "梁哲榕", engName: ""},
                {img : pgimg, name : "李沛倚", engName: ""},
                {img : gcimg, name : "游智翔", engName: ""},
                {img : nckuimg, name : "黃偉哲", engName: ""},
                
                {img : nckuimg, name : "唐嘉謙", engName: ""},
                {img : nckuimg, name : "何立安", engName: ""},
                {img : nckuimg, name : "陳藝丰", engName: ""},
                {img : nckuimg, name : "李雅婷", engName: ""},
                {img : nckuimg, name : "王雅函", engName: ""},
            ];

        
        this.state = {
            students : students
        }
 ...
```

## LabCarousel

> File : LabCarousel.js

![](https://i.imgur.com/zRivess.jpg)

如果需要新增照片一樣先import然後再加到`items`那個array中

```javascript=
class LabCarousel extends React.Component{
  constructor(props){
    super(props);
    let items = [
        { title:"實驗室聚餐", src:LabPhoto1},
        { title:"實驗室聚餐", src:LabPhoto2},
        { title:"實驗室聚餐", src:LabPhoto3}
    ]

    this.state = {
        carousel_items : items 
    }
  }
    
  render(){
    return (
 ...
```

# Development And Deployment

## Development

通常在開發時或是測試會使用 `npm start` 這個指令，此時電腦會開啟`localhost:3000`這個port，並且可以直接顯示在Browser上。但development mode比較慢，所以在正式部署時會先做優化。

:::info
development server : npm start
:::

## Deployment

如果需要部署則需要先做優化 : 
```shell=
$> npm run build
$> serve ./build
```

### Nginx

`nginx` 是用來做反向代理，可以將`splab.imis.ncku.edu.tw`轉至`localhost`或是其他電腦的port

Install nginx if needed:

```shell=
$> sudo apt-get install nginx
```

將`default.conf`複製(取代)`/etc/nginx/conf.d/default.conf`

```shell=
sudo cp default.conf /etc/nginx/conf.d/default.conf
```

接著將`nginx`服務重啟

```shell=
/etc/init.d/nginx reload
```
