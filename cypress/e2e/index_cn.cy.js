import Control from "../common/user/userControl.js"
var header = String.empty;

describe('達明機器人官網 <語系:簡中> - 【首頁連結測試】', function() {
    
    context('Top bar', function() {

      beforeEach( function() {     
        cy.visit('https://www.tm-robot.com.cn/zh-hans/')
      })

      it('TM Icon', function(){
        cy.get(Control['TM_icon_header']).click()
        cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/')
      })
      
      it('Login', function(){
        cy.get(Control['Login']).click()
        cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/login/')
      })

      // 切換語言Button找不到元素
      it('Language changes', function(){
        cy.get(Control['en']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com.cn/en/')
        cy.get(Control['zh_hant']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com.cn/zh-hant/')
        cy.get(Control['de']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com.cn/de/')
        cy.get(Control['ja']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com.cn/ja/')
        cy.get(Control['ko']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com.cn/ko/')
        cy.get(Control['zh_hans']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/')
      })
    })

    context('Menu bar', function() {

      context('AI Cobot [TMRobot、TMvision、配件 & 软体]', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com.cn/zh-hans/')
          cy.get(Control['AI_cobot']).click()
        })

        it('TM5-700', function(){
          cy.get(Control['700_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm5-700/')
        })
        it('TM5-900', function(){
          cy.get(Control['900_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm5-900/')
        })
        it('TM12', function(){
          cy.get(Control['12_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm12/')
        })
        it('TM14', function(){
          cy.get(Control['14_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm14/')
        })
        it('TM16', function(){
          cy.get(Control['16_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm16/')
        })
        it('TM20', function(){
          cy.get(Control['20_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm20/')
        })
        it('移动式机器人版本', function(){
          cy.get(Control['Mobile_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/mobile-series/')
        })
        it('达明AI+视觉检测软件', function(){
          cy.get(Control['vAOI_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
        })
        it('达明3D视觉', function(){
          cy.get(Control['3D_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/%e8%be%be%e6%98%8e3d%e8%a7%86%e8%a7%89/')
        })
        it('选配软件', function(){
          cy.get(Control['Add-on_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm-add-on/')
        })
        it('扩充配件', function(){
          cy.get(Control['Accessories_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/accessories-category/accessory-device-zh-hans/')
        })
      })

      context('解决方案与自动化服务 [AI、整合服务、合作伙伴服务]', function() {
        
        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com.cn/zh-hans/')
          cy.get(Control['Solution-Serices']).click()
        })

        it('达明AI+训练服务器', function(){
          cy.get(Control['TrainingServer_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/%e8%be%be%e6%98%8eai%e8%ae%ad%e7%bb%83%e6%9c%8d%e5%8a%a1%e5%99%a8/')
        })
        it('达明AI+视觉检测软件', function(){
          cy.get(Control['aAOI_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
        })
        it('达明图片管理系統', function(){
          cy.get(Control['Image_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/%e8%be%be%e6%98%8e%e5%9b%be%e7%89%87%e7%ae%a1%e7%90%86%e7%b3%bb%e7%b5%b1/')
        })
        it('达明自动化码垛解决方案', function(){
          cy.get(Control['Palletizing_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm-palletizing-solutions/')
        })
        it('达明自动化服务', function(){
          cy.get(Control['Automation_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm-automation/')
        })
        it('达明即插即用配件', function(){
          cy.get(Control['Plug&Play_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm-plugandplay/')
        })
      })

      context('实例应用', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com.cn/zh-hans/')
          cy.get(Control['Case-Sharing']).click()
        })

        it('应用视频', function(){
          cy.get(Control['Application_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/video-application/')
        })
        it('产业视频', function(){
          cy.get(Control['Industry_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/video-industry/')
        })
        it('成功案例', function(){
          cy.get(Control['Successful_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/view-case-study-look/')
        })
      })

      context('教学训练与支援 [教育训练、顾客支援]', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com.cn/zh-hans/')
          cy.get(Control['Training-Support']).click()
        })

        it('在線課程', function(){
          cy.get(Control['OnlineTraining_cn']).click()
          cy.url().should('eq','https://academic.tm-robot.com/')
        })
        it('联系我们', function(){
          cy.get(Control['Contact_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/contact-us/')
        })
        it('档案下载中心', function(){
          cy.get(Control['DownloadCenter_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/download-center/')
        })
        it('合作伙伴 ＆ 经销商专区', function(){
          cy.get(Control['PartnerArea_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/partner-login/')
        })
      })

      context('关于我们', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com.cn/zh-hans/')
          cy.get(Control['About-Us']).click()
        })

        it('关于我们', function(){
          cy.get(Control['AboutUs_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/about-us/')
        })
        it('公司简介', function(){
          cy.get(Control['CompanyProfile_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/company-profile/')
        })
        it('寻找代理商', function(){
          cy.get(Control['SearchForDistributor_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/search-for-distributor/')
        })
        it('达明新闻', function(){
          cy.get(Control['News_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/tm-news/')
        })
        it('全球活动', function(){
          cy.get(Control['GlobalEvent_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/events-archive/')
        })
        it('欧姆龙合作伙伴', function(){
          cy.get(Control['OmronNetwork_cn']).click()
          cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/techman-x-omron/')
        })
      })
    })

    context('实例应用图片', function() {
        
      beforeEach( function() {   
        if (header == String.empty)
        { cy.visit('https://www.tm-robot.com.cn/zh-hans/') }
        else
        { cy.get(Control["TM_icon_header"]).click() }
      })

      it('起司工厂食物包装与堆栈应用范例', function(){
        cy.get(Control['AppTag1']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e8%b5%b7%e5%8f%b8%e5%b7%a5%e5%8e%82%e9%a3%9f%e7%89%a9%e5%8c%85%e8%a3%85%e4%b8%8e%e5%a0%86%e6%a0%88%e5%ba%94%e7%94%a8%e8%8c%83%e4%be%8b/')
        header = "Next";
      })

      it('TM Robot + AMR 应用范例', function(){
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/tm-robot-amr-%e5%ba%94%e7%94%a8%e8%8c%83%e4%be%8b/')
      })

      it('工厂自动化: PCB组装', function(){
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e5%b7%a5%e5%8e%82%e8%87%aa%e5%8a%a8%e5%8c%96-pcb%e7%bb%84%e8%a3%85/')
      })

      it('工厂自动化: 螺丝锁附', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e5%b7%a5%e5%8e%82%e8%87%aa%e5%8a%a8%e5%8c%96-%e8%9e%ba%e4%b8%9d%e9%94%81%e9%99%84/')
      })

      // ---------Click順序怪怪的
      it('车用零件组装', function() {
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag1']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e8%bd%a6%e7%94%a8%e9%9b%b6%e4%bb%b6%e7%bb%84%e8%a3%85/')
      })

      it('食品处理: 炸土豆条', function() {
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e9%a3%9f%e5%93%81%e5%a4%84%e7%90%86-%e7%82%b8%e5%9c%9f%e8%b1%86%e6%9d%a1/')
      })

      it('用TM Robot制作章鱼烧', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e7%94%a8tm-robot%e5%88%b6%e4%bd%9c%e7%ab%a0%e9%b1%bc%e7%83%a7/')
      })

      it('食品餐饮&服务业应用实例', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e9%a3%9f%e5%93%81%e9%a4%90%e9%a5%ae%e6%9c%8d%e5%8a%a1%e4%b8%9a%e5%ba%94%e7%94%a8%e5%ae%9e%e4%be%8b/')
      })

      it('金属焊接应用', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e9%87%91%e5%b1%9e%e7%84%8a%e6%8e%a5%e5%ba%94%e7%94%a8/')
      })

      it('Atlas螺丝锁固', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/atlas%e8%9e%ba%e4%b8%9d%e9%94%81%e5%9b%ba/')
      })
      // ---------Click順序怪怪的
    })

    context('实例应用名稱', function() {
        
      beforeEach( function() {   
        if (header == String.empty)
        { cy.visit('https://www.tm-robot.com.cn/zh-hans/') }
        else
        { cy.get(Control["TM_icon_header"]).click() }
      })

      it('起司工厂食物包装与堆栈应用范例', function(){
        cy.contains('起司工厂食物包装与堆栈应用范例').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e8%b5%b7%e5%8f%b8%e5%b7%a5%e5%8e%82%e9%a3%9f%e7%89%a9%e5%8c%85%e8%a3%85%e4%b8%8e%e5%a0%86%e6%a0%88%e5%ba%94%e7%94%a8%e8%8c%83%e4%be%8b/')
        header = "Next";
      })

      it('TM Robot + AMR 应用范例', function(){
        cy.contains('TM Robot + AMR 应用范例').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/tm-robot-amr-%e5%ba%94%e7%94%a8%e8%8c%83%e4%be%8b/')
      })

      it('工厂自动化: PCB组装', function(){
        cy.get(Control['IndexApplications_BNext']).click()
        cy.contains('工厂自动化: PCB组装').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e5%b7%a5%e5%8e%82%e8%87%aa%e5%8a%a8%e5%8c%96-pcb%e7%bb%84%e8%a3%85/')
      })

      it('工厂自动化: 螺丝锁附', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.contains('工厂自动化: 螺丝锁附').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e5%b7%a5%e5%8e%82%e8%87%aa%e5%8a%a8%e5%8c%96-%e8%9e%ba%e4%b8%9d%e9%94%81%e9%99%84/')
      })

      it('车用零件组装', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.contains('车用零件组装').click({force: true})
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e8%bd%a6%e7%94%a8%e9%9b%b6%e4%bb%b6%e7%bb%84%e8%a3%85/')
      })

      it('食品处理: 炸土豆条', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.contains('食品处理: 炸土豆条').click({force: true})
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e9%a3%9f%e5%93%81%e5%a4%84%e7%90%86-%e7%82%b8%e5%9c%9f%e8%b1%86%e6%9d%a1/')
      })

      it('用TM Robot制作章鱼烧', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.contains('用TM Robot制作章鱼烧').click({force: true})
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e7%94%a8tm-robot%e5%88%b6%e4%bd%9c%e7%ab%a0%e9%b1%bc%e7%83%a7/')
      })

      it('食品餐饮&服务业应用实例', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick({force: true})
        cy.contains('食品餐饮&服务业应用实例').click({force: true})
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e9%a3%9f%e5%93%81%e9%a4%90%e9%a5%ae%e6%9c%8d%e5%8a%a1%e4%b8%9a%e5%ba%94%e7%94%a8%e5%ae%9e%e4%be%8b/')
      })

      it('金属焊接应用', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick({force: true})
        cy.get(Control['IndexApplications_BNext']).click({force: true})
        cy.contains('金属焊接应用').click({force: true})
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/%e9%87%91%e5%b1%9e%e7%84%8a%e6%8e%a5%e5%ba%94%e7%94%a8/')
      })

      it('Atlas螺丝锁固', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick({force: true})
        cy.contains('Atlas螺丝锁固').click({force: true})
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/application-videoapp/atlas%e8%9e%ba%e4%b8%9d%e9%94%81%e5%9b%ba/')
      })
    })

//-------------------------------------------------------------------------------------- Tim maintain---------------------------------------------------------------------------

    // context('AI Cobot Series picture', () => {
    //   Control['Wait']
    //   it('Models', () => {
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-86c41ae > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-700/')
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-5b3c02c > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-900/')
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-00ecd04 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm12/')
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-70d69ed > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm14/')
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-b0cb1b2 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm16/')
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-dafcbec > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm20/')
    //   })
    // })

    // context('Embrace the Future of Automation', () => {
    //   it('Contact Us', () => {
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-button-link').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/contact-us/')
    //   })
    // })

    // context('Footer', () => {
    //   it('AI Cobot [TMRobot、TMvision、Accessories & Software]', () => {
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-700/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(2) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-900/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(3) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm12/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(4) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm14/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(5) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm16/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(6) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm20/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(7) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/mobile-series/')
    //     cy.get('#elementor-tab-title-1732 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1732 > ul > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
    //     cy.get('#elementor-tab-title-1732 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1732 > ul > :nth-child(2) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-3dvision/')
    //   })

    //   it('Solution & Services [AI、Integration Service、Partner Service]', () => {
    //     cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7271 > ul > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-training-server/')
    //     cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7271 > ul > :nth-child(2) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
    //     cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7271 > ul > :nth-child(3) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-image-manager/')
    
    //     cy.get('#elementor-tab-title-7272 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7272 > ul > li > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-palletizing-solutions/')
    
    //     cy.get('#elementor-tab-title-7273 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7273 > ul > li > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-plugandplay/')
    //   })

    //   it('Case Sharing', () => {
    //   // cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/video-application/')
    //     cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/industry/')
    //     cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/view-case-study-look/')
    //   })
    
    //   it('Traing Support', () => {
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/contact-us/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/download-center/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/docs/')
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click() 
    //     cy.url().should('eq', 'https://academic.tm-robot.com/')
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-academic/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/partner-area/')
    //   })
    
    //   it('About Us', () => {
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/about-us/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/company-profile/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/search-for-distributor/') 
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-news/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/events-archive/') //No en
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/techman-x-omron/')
    //     cy.get(':nth-child(7) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/media-library/')
    //   })

    //   it('TM Icon', function(){
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get(Control['TM_icon_footer']).click()
    //     cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/')
    //   })

    //   it('Privacy & Cookies Policy', function(){
    //     cy.visit('https://www.tm-robot.com.cn/zh-hans/')
    //     cy.get(Control['PrivacyCookiesPolicy']).click()
    //     cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/privacy-cookie-policy/')
    //     cy.get(Control['TM_icon_footer']).click()
    //   })
    // })
})

//cypress run --spec "cypress/e2e/index_cn.cy.js"