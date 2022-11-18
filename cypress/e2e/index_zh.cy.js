import Control from "../common/user/userControl.js"
var header = String.empty;

describe('達明機器人官網 <語系:簡中> - 【首頁連結測試】', function() {
    
    context('Top bar', function() {

      beforeEach( function() {     
        cy.visit('https://www.tm-robot.com/zh-hant/')
      })

      it('TM Icon', function(){
        cy.get(Control['TM_icon_header']).click()
        cy.url().should('eq','https://www.tm-robot.com/zh-hant/')
      })
      
      it('Login', function(){
        cy.get(Control['Login']).click()
        cy.url().should('eq','https://www.tm-robot.com/zh-hant/login2/')
      })

      it('Language changes', function(){
        cy.get(Control['en']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com/en/')
        cy.get(Control['zh_hant']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com/zh-hant/')
        cy.get(Control['de']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com/de/')
        cy.get(Control['ja']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com/ja/')
        cy.get(Control['ko']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com/ko/')
        cy.get(Control['zh_hans']).click({force: true})
        cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/')
      })
    })

    context('Menu bar', function() {

      context('AI Cobot [TMRobot、TMvision、配件 & 軟體]', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com/zh-hant/')
          cy.get(Control['AI_cobot']).click()
        })

        it('TM5-700', function(){
          cy.get(Control['700_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm5-700/')
        })
        it('TM5-900', function(){
          cy.get(Control['900_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm5-900/')
        })
        it('TM12', function(){
          cy.get(Control['12_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm12/')
        })
        it('TM14', function(){
          cy.get(Control['14_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm14/')
        })
        it('TM16', function(){
          cy.get(Control['16_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm16/')
        })
        it('TM20', function(){
          cy.get(Control['20_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm20/')
        })
        it('移動式機器人系列', function(){
          cy.get(Control['Mobile_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/mobile-series/')
        })
        it('TM AI+ AOI Edge', function(){
          cy.get(Control['vAOI_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-ai-aoi-edge/')
        })
        it('TM 3DVision', function(){
          cy.get(Control['3D_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-3dvision/')
        })
        it('加值軟體', function(){
          cy.get(Control['Add-on_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-add-on/')
        })
        it('擴充配件', function(){
          cy.get(Control['Accessories_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/accessories-category/accessory-device-zh-hant/')
        })
      })

      context('解决方案與自動化服務 [AI、整合服務、合作夥伴服務]', function() {
        
        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com/zh-hant/')
          cy.get(Control['Solution-Serices']).click()
        })

        it('TM AI+ 訓練伺服器', function(){
          cy.get(Control['TrainingServer_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-ai-%e8%a8%93%e7%b7%b4%e4%bc%ba%e6%9c%8d%e5%99%a8/')
        })
        it('TM AI+ AOI Edge', function(){
          cy.get(Control['aAOI_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-ai-aoi-edge/')
        })
        it('TM Image Manager', function(){
          cy.get(Control['Image_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-image-manager/')
        })
        it('TM Palletizing 解決方案', function(){
          cy.get(Control['Palletizing_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-palletizing-solutions/')
        })
        it('TM Automation', function(){
          cy.get(Control['Automation_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/automation/')
        })
        it('TM Plug&Play', function(){
          cy.get(Control['Plug&Play_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-plugandplay/')
        })
        it('TM Partner 解決方案', function(){
            cy.get(Control['Partner_zh']).click()
            cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-partner-solution/')
          })
      })

      context('實例應用', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com/zh-hant/')
          cy.get(Control['Case-Sharing']).click()
        })

        it('應用影片', function(){
          cy.get(Control['Application_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/video-application/')
        })
        it('產業影片', function(){
          cy.get(Control['Industry_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/video-industry/')
        })
        it('成功案例', function(){
          cy.get(Control['Successful_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/view-case-study-look/')
        })
      })

      context('教學訓練與支援 [教育訓練、顧客支援]', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com/zh-hant/')
          cy.get(Control['Training-Support']).click()
        })

        it('TM Academic', function(){
            cy.get(Control['Academic_zh']).click()
            cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-academic/')
          })
        it('在線課程', function(){
          cy.get(Control['OnlineTraining_zh']).click()
          cy.url().should('eq','https://academic.tm-robot.com/')
        })
        it('聯絡我們', function(){
          cy.get(Control['Contact_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/contact-us/')
        })
        it('檔案下載中心', function(){
          cy.get(Control['DownloadCenter_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/download-center/')
        })
        it('技術文件', function(){
            cy.get(Control['TechnicalDocument_zh']).click()
            cy.url().should('eq','https://www.tm-robot.com/zh-hant/docs/')
        })
        it('Partner Area', function(){
          cy.get(Control['PartnerArea_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/partner-login/')
        })
      })

      context('關於我們', function() {

        beforeEach( function() {     
          cy.visit('https://www.tm-robot.com/zh-hant/')
          cy.get(Control['About-Us']).click()
        })

        it('關於我們', function(){
          cy.get(Control['AboutUs_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/about-us/')
        })
        it('公司簡介', function(){
          cy.get(Control['CompanyProfile_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/company-profile/')
        })
        it('尋找代理商', function(){
          cy.get(Control['SearchForDistributor_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/search-for-distributor/')
        })
        it('達明新聞', function(){
          cy.get(Control['News_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/tm-news/')
        })
        it('全球活動', function(){
          cy.get(Control['GlobalEvent_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/events-archive/')
        })
        it('人才招募', function(){
            cy.get(Control['Recruitment_zh']).click()
            cy.url().should('eq','https://www.tm-robot.com/zh-hant/career/')
        })
        it('OMRON Network', function(){
          cy.get(Control['OmronNetwork_zh']).click()
          cy.url().should('eq','https://www.tm-robot.com/zh-hant/omron/')
        })
      })
    })

    context('實例應用圖片', function() {
        
      beforeEach( function() {   
        if (header == String.empty)
        { cy.visit('https://www.tm-robot.com/zh-hant/') }
        else
        { cy.get(Control["TM_icon_header"]).click() }
      })

      it('起司工廠食物包裝與堆棧應用範例', function(){
        cy.get(Control['AppTag1']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e8%b5%b7%e5%8f%b8%e5%b7%a5%e5%bb%a0%e9%a3%9f%e7%89%a9%e5%8c%85%e8%a3%9d%e8%88%87%e5%a0%86%e6%a3%a7%e6%87%89%e7%94%a8%e7%af%84%e4%be%8b/')
        header = "Next";
      })

      it('TM Robot + AMR 應用範例', function(){
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/tm-robot-amr-%e6%87%89%e7%94%a8%e7%af%84%e4%be%8b/')
      })

      it('工廠自動化: PCB組裝', function(){
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e5%b7%a5%e5%bb%a0%e8%87%aa%e5%8b%95%e5%8c%96-pcb%e7%b5%84%e8%a3%9d/')
      })

      it('工廠自動化: 螺絲鎖附', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e5%b7%a5%e5%bb%a0%e8%87%aa%e5%8b%95%e5%8c%96-%e8%9e%ba%e7%b5%b2%e9%8e%96%e9%99%84/')
      })

    // ---------Click順序怪怪的
      it('車用零件組裝', function() {
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag1']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e8%bb%8a%e7%94%a8%e9%9b%b6%e4%bb%b6%e7%b5%84%e8%a3%9d/')
      })

      it('TM Robot Frying French Fries', function() {
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/tm-robot-frying-french-fries/')
      })

      it('Cooking Takoyaki with TM Robot', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/cooking-takoyaki-with-tm-robot/')
      })

      it('Food Service and Restaurant Industry Application with TM Robot', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/food-service-and-restaurant-industry-application-with-tm-robot/')
      })

      it('金屬焊接應用', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e9%87%91%e5%b1%ac%e7%84%8a%e6%8e%a5%e6%87%89%e7%94%a8/')
      })

      it('Screw Driving with Atlas Copco', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/screw-driving-with-atlas-copco/')
      })
      // ---------Click順序怪怪的
    })

    context('實例應用名稱', function() {

        beforeEach( function() {   
          if (header == String.empty)
          { cy.visit('https://www.tm-robot.com/zh-hant/') }
          else
          { cy.get(Control["TM_icon_header"]).click() }
        })
  
        it('起司工廠食物包裝與堆棧應用範例', function(){
          cy.contains('起司工廠食物包裝與堆棧應用範例').click()
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e8%b5%b7%e5%8f%b8%e5%b7%a5%e5%bb%a0%e9%a3%9f%e7%89%a9%e5%8c%85%e8%a3%9d%e8%88%87%e5%a0%86%e6%a3%a7%e6%87%89%e7%94%a8%e7%af%84%e4%be%8b/')
          header = "Next";
        })
  
        it('TM Robot + AMR 應用範例', function(){
          cy.contains('TM Robot + AMR 應用範例').click()
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/tm-robot-amr-%e6%87%89%e7%94%a8%e7%af%84%e4%be%8b/')
        })
  
        it('工廠自動化: PCB組裝', function(){
          cy.get(Control['IndexApplications_BNext']).click()
          cy.contains('工廠自動化: PCB組裝').click()
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e5%b7%a5%e5%bb%a0%e8%87%aa%e5%8b%95%e5%8c%96-pcb%e7%b5%84%e8%a3%9d/')
        })
  
        it('工廠自動化: 螺絲鎖附', function() {
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.contains('工廠自動化: 螺絲鎖附').click()
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e5%b7%a5%e5%bb%a0%e8%87%aa%e5%8b%95%e5%8c%96-%e8%9e%ba%e7%b5%b2%e9%8e%96%e9%99%84/')
        })
  
        it('車用零件組裝', function() {
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).click()
          cy.contains('車用零件組裝').click({force: true})
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e8%bb%8a%e7%94%a8%e9%9b%b6%e4%bb%b6%e7%b5%84%e8%a3%9d/')
        })
  
        it('TM Robot Frying French Fries', function() {
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.contains('TM Robot Frying French Fries').click({force: true})
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/tm-robot-frying-french-fries/')
        })
  
        it('Cooking Takoyaki with TM Robot', function() {
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).click()
          cy.contains('Cooking Takoyaki with TM Robot').click({force: true})
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/cooking-takoyaki-with-tm-robot/')
        })
  
        it('Food Service and Restaurant Industry Application with TM Robot', function() {
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick({force: true})
          cy.contains('Food Service and Restaurant Industry Application with TM Robot').click({force: true})
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/food-service-and-restaurant-industry-application-with-tm-robot/')
        })
  
        it('金屬焊接應用', function() {
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick({force: true})
          cy.get(Control['IndexApplications_BNext']).click({force: true})
          cy.contains('金屬焊接應用').click({force: true})
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/%e9%87%91%e5%b1%ac%e7%84%8a%e6%8e%a5%e6%87%89%e7%94%a8/')
        })
  
        it('Screw Driving with Atlas Copco', function() {
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick()
          cy.get(Control['IndexApplications_BNext']).dblclick({force: true})
          cy.contains('Screw Driving with Atlas Copco').click({force: true})
          cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/application-videoapp/screw-driving-with-atlas-copco/')
        })
    })

// -------------------------------------------------------------------------------------- Tim maintain---------------------------------------------------------------------------

    // context('AI Cobot Series picture', () => {
    //   Control['Wait']
    //   it('Models', () => {
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-86c41ae > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm5-700/')
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-5b3c02c > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm5-900/')
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-00ecd04 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm12/')
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-70d69ed > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm14/')
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-b0cb1b2 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm16/')
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-dafcbec > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm20/')
    //   })
    // })

    // context('Embrace the Future of Automation', () => {
    //   it('Contact Us', () => {
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-button-link').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/contact-us/')
    //   })
    // })

    // context('Footer', () => {
    //   it('AI Cobot [TMRobot、TMvision、Accessories & Software]', () => {
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm5-700/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(2) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm5-900/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(3) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm12/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(4) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm14/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(5) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm16/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(6) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm20/')
    //     cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1731 > ul > :nth-child(7) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/mobile-series/')
    //     cy.get('#elementor-tab-title-1732 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1732 > ul > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-ai-aoi-edge/')
    //     cy.get('#elementor-tab-title-1732 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-1732 > ul > :nth-child(2) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-3dvision/')
    //   })

    //   it('Solution & Services [AI、Integration Service、Partner Service]', () => {
    //     cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7271 > ul > :nth-child(1) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-ai-training-server/')
    //     cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7271 > ul > :nth-child(2) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-ai-aoi-edge/')
    //     cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7271 > ul > :nth-child(3) > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-image-manager/')
    
    //     cy.get('#elementor-tab-title-7272 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7272 > ul > li > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-palletizing-solutions/')
    
    //     cy.get('#elementor-tab-title-7273 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
    //     cy.get('#elementor-tab-content-7273 > ul > li > a').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-plugandplay/')
    //   })

    //   it('Case Sharing', () => {
    //   // cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/video-application/')
    //     cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/industry/')
    //     cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/view-case-study-look/')
    //   })
    
    //   it('Traing Support', () => {
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/contact-us/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/download-center/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/docs/')
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click() 
    //     cy.url().should('eq', 'https://academic.tm-robot.com/')
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-academic/')
    //     cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/partner-area/')
    //   })
    
    //   it('About Us', () => {
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/about-us/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/company-profile/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/search-for-distributor/') 
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/tm-news/')
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/events-archive/') //No en
    //     cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/techman-x-omron/')
    //     cy.get(':nth-child(7) > a > .elementor-icon-list-text').click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/zh-hant/media-library/')
    //   })

    //   it('TM Icon', function(){
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get(Control['TM_icon_footer']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/zh-hant/')
    //   })

    //   it('Privacy & Cookies Policy', function(){
    //     cy.visit('https://www.tm-robot.com/zh-hant/')
    //     cy.get(Control['PrivacyCookiesPolicy']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/zh-hant/privacy-cookie-policy/')
    //     cy.get(Control['TM_icon_footer']).click()
    //   })
    // })
})

//cypress run --spec "cypress/e2e/index_zh.cy.js"