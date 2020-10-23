<template>
  <div class="container">
    <!--头部banner区域-->
    <div class="header">
      <span>Company banner</span>
    </div>
    <div class="main" @scroll="handlerScroll"> 
      <!--左侧内容区域-->
      <div id="content" class="content">
        <div class="content-box" id="section1">
          <span>列表A</span>
          <div class="content-box-section1">
             <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称1">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域2">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间3">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送4">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
               
               


                <el-form-item>
                  <el-button type="primary" @click="onSubmit">提交</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
            </el-form>

          </div>
          
        </div>
         <div class="content-box" id="section2">
           <span>列表B</span>
           <div class="content-box-section2">
               <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称1">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域2">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间3">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送4">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质5">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                  </el-form-item>
                <el-form-item label="特殊资源6">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                  </el-form-item>
                <el-form-item label="活动形式7">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>

          


                <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即创建</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
            </el-form>

           </div>
          
        </div>
         <div class="content-box" id="section3">
           <span>列表C</span>
           <div class="content-box-section3">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称1">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域2">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间3">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送4">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质5">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                  </el-form-item>
                <el-form-item label="特殊资源6">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                  </el-form-item>
                <el-form-item label="活动形式7">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>

                <el-form-item label="活动名称8">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域9">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
               


                <el-form-item>
                  <el-button type="primary" @click="onSubmit">发布</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
            </el-form>

           </div>
          
        </div>
         <div class="content-box" id="section4">
           <span>列表D</span>
           <div class="content-box-section4">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称1">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域2">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间3">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送4">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质5">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                  </el-form-item>
                <el-form-item label="特殊资源6">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                  </el-form-item>
                <el-form-item label="活动形式7">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>

                <el-form-item label="活动名称8">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域9">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间10">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                 <el-form-item label="活动名称11">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域12">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间13">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>


                <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即创建</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
            </el-form>
             

           </div>
          
        </div>
         <div class="content-box content-box-last" id="section5">
           <div>
             <span>列表E</span>
           </div>
           <div class="content-box-section5">
              <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
              </el-row>

              <el-row>
                <el-button plain>朴素按钮</el-button>
                <el-button type="primary" plain>主要按钮</el-button>
                <el-button type="success" plain>成功按钮</el-button>
                <el-button type="info" plain>信息按钮</el-button>
                <el-button type="warning" plain>警告按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
              </el-row>

              <el-row>
                <el-button round>圆角按钮</el-button>
                <el-button type="primary" round>主要按钮</el-button>
                <el-button type="success" round>成功按钮</el-button>
                <el-button type="info" round>信息按钮</el-button>
                <el-button type="warning" round>警告按钮</el-button>
                <el-button type="danger" round>危险按钮</el-button>
              </el-row>

              <el-row>
                <el-button icon="el-icon-search" circle></el-button>
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
                <el-button type="success" icon="el-icon-check" circle></el-button>
                <el-button type="info" icon="el-icon-message" circle></el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button>
              </el-row>
            
              

           </div>
           
          
        </div>

      </div>
      <!--右侧菜单区域-->
      <div class="menu">
        <ul>
          <li v-for="(item, index) in navList" :key="item+index">
            <a href="javascript:;" :class="{'active': curIndex===index}" @click="goto(item.href, index)">{{item.title}}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>   
</template>

<script>
  import Vue from 'vue';
  import {Row,Col, Button,Form,FormItem,Input, Switch,Select,Radio,RadioGroup,
  Checkbox,CheckboxGroup,Option,DatePicker,TimePicker, Table,
  TableColumn,} from 'element-ui';
  Vue.use(Row).use(Col).use(Button).use(Form).use(FormItem).use(Input).use(Switch).use(Select).use(Radio)
  .use(RadioGroup).use(Checkbox).use(CheckboxGroup).use(Option).use(DatePicker).use(TimePicker).use(Table)
  .use(TableColumn);
    export default {
      name: "login",
      data(){
           return {
             scrollSectionControl: [ false, false, false, false, false],//每个卡片层是否锁定，分别为第一个卡片到第五个卡片的锁定标识
             isClickOperator: false,//是否是点击操作标识
             myTimeOut: null,
             myWatchOut: null,
             username:'',
             phone:'',
             password:'',
             curIndex: 0,
             navList: [
               {
                 title: '列表A',
                 href:'section1'
               },
                {
                 title: '列表B',
                 href:'section2'
               },
                {
                 title: '列表C',
                 href:'section3'
               },
                {
                 title: '列表D',
                 href:'section4'
               },
                {
                 title: '列表E',
                 href:'section5'
               }
             ],
              form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
              },
               tableData: [{
                  date: '2016-05-03',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-08',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-06',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-07',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-09',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-10',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-11',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-12',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  date: '2016-05-13',
                  name: '王小虎',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]

           }
      },
      created(){

      },
      mounted(){
        window.addEventListener('scroll', this.handleScroll, true);
      },
      methods:{
        handlerScroll(){
          let that = this;
          let wrapHeight = Number(document.querySelector('.main').scrollTop+100);//100的高度为顶部banner高度
          wrapHeight = Math.ceil(wrapHeight);//兼容网页缩放比例功能（可以通过放开缩放观察点1和2观察结果）
          //console.log('wrapHeight: '+wrapHeight);   //缩放观察点1
          let sectionColl = document.getElementsByClassName('content-box');//内容区各个卡片层集合
          let scrollParent = document.querySelector('.main');//内容区最外层盒子
          //滚动时级联右侧菜单选中功能
          Array.prototype.map.call(sectionColl, (item, index) =>{
            //console.log(item+'_'+index+': '+item.offsetTop);   //缩放观察点2
            if(wrapHeight >= item.offsetTop){
              that.curIndex = index;
            }
          });

          //滚动时距离最近的卡片层时自动吸顶功能
          if(that.isClickOperator){//是否点击右侧菜单滚动
            //console.log('是点击');
            that.isClickOperator = false;
          }else{//不是点击右侧菜单滚动
              Array.prototype.map.call(sectionColl, (item, index) =>{
                  if(index != 0){//第一个卡片层不需要此功能
                      //console.log('不是点击' + 'index: ' + index + 'scrollSection: ' + scrollSection);
                      //上下偏移30范围内时吸顶
                      if((Number(item.offsetTop-30) <=wrapHeight) && (wrapHeight <= Number(item.offsetTop+30)) && ! that.scrollSectionControl[index]){
                          that.scrollSectionControl[index] = true;//锁定
                          console.log('进来了：'+ wrapHeight);
                          scrollParent.scrollTo(0, Number(item.offsetTop-100));//滚动到卡片层offsetTop处
                          document.querySelector('.main').style.overflow = 'hidden';//冻结滚动
                          that.myTimeOut && (clearTimeout(that.myTimeOut));
                          that.myTimeOut = setTimeout(() => {
                            document.querySelector('.main').style.overflow = '';//恢复滚动
                            that.clearState(index);//恢复锁定状态方法
                          }, 10);
                      }
                  } 
              });

          }
          
        },
        clearState(index){
          this.myWatchOut && (clearTimeout(this.myWatchOut));
          this.myWatchOut = setTimeout(() => {
            this.scrollSectionControl[index] = false;//解锁
          }, 100);
        },
        goto(id, index){
          //方法一
          this.curIndex = index;
          this.isClickOperator = true;
          console.log('id: '+id);
          var height = Number(document.getElementById(id).offsetTop-100) // 导航的高度
           console.log('height: '+height);
          var scrollBox1 = document.querySelector('.main');
          var  step = height / 50;
          var count = 1;
          var distance = 0;
         // var wrapHeight = document.querySelector('.main').scrollTop;
          // if(wrapHeight > height){//往上滚动
          //   smoothDown();

          // }else{//往下滚动
          //   //smoothUp();
          // }

          //console.log('main scrollTop: '+ document.querySelector('.main').scrollTop);

          scrollBox1.scrollTo(0, height);



        function smoothDown() {
          debugger
         if (wrapHeight > height && (count <step)) {
           
           distance += (count * 50);
           count++;
          //  document.body.scrollTop = distance // 网页被卷去的高
          //  document.documentElement.scrollTop = distance // 当前页面的滚动条纵坐标位置
          scrollBox1.scrollTo(0, distance);
           setTimeout(smoothDown, 200)
         } else {
          //  document.body.scrollTop = total
          //  document.documentElement.scrollTop = total
          scrollBox1.scrollTo(0, height);
         }
       }
      //  function smoothUp() {
      //    if (distance > total) {
      //      distance -= step
      //      document.body.scrollTop = distance
      //      document.documentElement.scrollTop = distance
      //      setTimeout(smoothUp, 10)
      //    } else {
      //      document.body.scrollTop = total
      //      document.documentElement.scrollTop = total
      //    }
      //  }





         
          //方法二
          //document.querySelector("#"+id).scrollIntoView(true);   
         
        },
        initData(){
          var $navs = $('.menu ul li a');
          $navs.on('click',function(e){
              console.log($(this).attr('href'));
              console.log($($(this).attr('href')).offset().top);
            e.preventDefault();
            // $('html,body').animate({
            //   'scrollTop':$($(this).attr('href')).offset().top
            // },400);
          })

        },
        onSubmit(){}
         
      },
      destroyed(){
        window.removeEventListener('scroll', this.handleScroll, true);
      }

    }
</script>

<style scoped>
.container{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.header{
  height: 100px;
  line-height: 100px;
  font-size: 25px;
  font-weight: 500;
  color: #fff;
  background: darkcyan;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  width:100%;
  height: 100%;
}

.content{
  width: 80%;
  height: 100%;
}
.content-box{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  overflow-x: hidden;
  /* overflow-y: scroll; */
  box-sizing: border-box;
  border: 1px solid seagreen;
}
.content-box-last{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  border: 1px solid seagreen;
}

.main::-webkit-scrollbar,
.content-box::-webkit-scrollbar{
  width: 0;
  height: 0;
}
.content-box-section1,
.content-box-section2,
.content-box-section3,
.content-box-section4,
.content-box-section5{
  width: 100%;
  height: 100%;

}
.menu{
  position: fixed;
  top:100px;
  right: 0;
  width: 20%;
  margin-top: 3px;
  text-align: center;
  box-sizing: border-box;
}
.menu ul li{
  height: 45px;
  line-height: 45px;
  margin: 0 3px;

  
}
.menu ul li a{
  display: block;
  width: 100%;
  margin: 2px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid seagreen;
}
.active {
  color:#fff;
  background:rosybrown;
}





</style>
