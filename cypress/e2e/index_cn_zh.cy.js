import Control from "../common/user/userControl.js"
var header = String.empty;

describe('達明機器人官網 <語系:簡體中文> - 【首頁連結測試】', function() {
    
    // context('Top bar', function() {

    //   beforeEach( function() {     
    //     cy.visit('https://www.tm-robot.com/en/')
    //   })

    //   it('TM Icon', function(){
    //     cy.get(Control['TM_icon_header']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/')
    //   })
      
    //   it('Login', function(){
    //     cy.get(Control['Login']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/login/')
    //   })

    //   // 切換語言Button找不到元素
    //   it('Language changes', function(){
    //     cy.get(Control['zh_hant']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/zh-hant/')
    //     cy.get(Control['de']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/de/')
    //     cy.get(Control['ja']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/ja/')
    //     cy.get(Control['ko']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/ko/')
    //     cy.get(Control['en']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/')
    //     // 簡中網址單獨測試
    //     cy.get(Control['zh_hans_en']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/')
    //   })
    // })

    // context('Menu bar', function() {

    //   beforeEach( function() {     
    //     cy.visit('https://www.tm-robot.com/en/')
    //   })

    //   it('AI Cobot [TMRobot、TMvision、Accessories & Software]', function(){
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['700']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm5-700/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['900']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm5-900/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['12']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm12/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['14']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm14/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['16']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm16/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['20']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm20/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['Mobile']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/mobile-series/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['vAOI']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-aoi-edge/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['3D']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-3dvision/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['Add-on']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-add-on/')
    //     cy.get(Control['AI_cobot']).click()
    //     cy.get(Control['Accessories']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/accessories-category/accessory-device/')
    //   })

    //   it('Solution & Services [AI、Integration Service、Partner Service]', function(){
    //     cy.get(Control['Solution-Serices']).click()
    //     cy.get(Control['TrainingServer']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-training-server/')
    //     cy.get(Control['Solution-Serices']).click()
    //     cy.get(Control['aAOI']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-aoi-edge/')
    //     cy.get(Control['Solution-Serices']).click()
    //     cy.get(Control['Image']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-image-manager/')
    //     cy.get(Control['Solution-Serices']).click()
    //     cy.get(Control['Palletizing']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-palletizing-solutions/')
    //     cy.get(Control['Solution-Serices']).click()
    //     cy.get(Control['Plug&Play']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-plugandplay/')
    //   })

    //   it('Case Sharing', function(){
    //     cy.get(Control['Case-Sharing']).click()
    //     cy.get(Control['Application']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/video-application/')
    //     cy.get(Control['Case-Sharing']).click()
    //     cy.get(Control['Industry']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/industry/')
    //     cy.get(Control['Case-Sharing']).click()
    //     cy.get(Control['Successful']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/view-case-study-look/')
    //   })

    //   it('Training & Support', function(){
    //     cy.get(Control['Training-Support']).click()
    //     cy.get(Control['Academic']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-academic/')
    //     cy.get(Control['Training-Support']).click()
    //     cy.get(Control['OnlineTraining']).click()
    //     cy.url().should('eq','https://academic.tm-robot.com/')
    //     cy.visit('https://www.tm-robot.com/en/')
    //     cy.get(Control['Training-Support']).click()
    //     cy.get(Control['Contact']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/contact-us/')
    //     cy.get(Control['Training-Support']).click()
    //     cy.get(Control['DownloadCenter']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/download-center/')
    //     cy.get(Control['Training-Support']).click()
    //     cy.get(Control['TechnicalDocument']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/docs/')
    //     cy.get(Control['Training-Support']).click()
    //     cy.get(Control['PartnerArea']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/partner-login/')
    //   })

    //   it('About Us', function(){
    //     cy.get(Control['About-Us']).click()
    //     cy.get(Control['AboutUs']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/about-us/')
    //     cy.get(Control['About-Us']).click()
    //     cy.get(Control['CompanyProfile']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/company-profile/')
    //     cy.get(Control['About-Us']).click()
    //     cy.get(Control['SearchForDistributor']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/search-for-distributor/')
    //     cy.get(Control['About-Us']).click()
    //     cy.get(Control['News']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-news/')
    //     cy.get(Control['About-Us']).click()
    //     cy.get(Control['GlobalEvent']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/events-archive/')
    //     cy.get(Control['About-Us']).click()
    //     cy.get(Control['OmronNetwork']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/techman-x-omron/')
    //   })
    // })

    // context('Applications picture', function() {
        
    //   beforeEach( function() {   
    //     if (header == String.empty)
    //     { cy.visit('https://www.tm-robot.com/en/') }
    //     else
    //     { cy.get(Control["TM_icon_header"]).click() } 
    //   })

    //   it('Food Packaging and Palletizing at Cheese Factory', function(){
    //     cy.get(Control['AppTag1']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/food-packaging-and-palletizing-at-cheese-factory/')
    //     header = "Next";
    //   })

    //   it('TM Robot + AMR Application Example', function(){
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/tm-robot-amr-application-example/')
    //   })

    //   it('Factory Automation: PCB Assembly', function(){
    //     cy.get(Control['IndexApplications_BNext']).click()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/factory-automation-pcb-assembly/')
    //   })

    //   it('Factory Automation: Automatic Screwing', function() {
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/factory-automation-automatic-screwing/')
    //   })

    //   it('Automotive Component Assembly', function() {
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).click()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/automotive-component-assembly/')
    //   })

    //   it('TM Robot Frying French Fries', function() {
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/tm-robot-frying-french-fries/')
    //   })

    //   it('Cooking Takoyaki with TM Robot', function() {
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).click()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/cooking-takoyaki-with-tm-robot/')
    //   })

    //   it('Food Service and Restaurant Industry Application with TM Robot', function() {
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/food-service-and-restaurant-industry-application-with-tm-robot/')
    //   })

    //   it('Metal Welding', function() {
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).click()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/metal-welding/')
    //   })

    //   it('Screw Driving with Atlas Copco', function() {
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['IndexApplications_BNext']).dblclick()
    //     cy.get(Control['AppTag2']).click()
    //     cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/screw-driving-with-atlas-copco/')
    //   })
    // })

//-------------------------------------------------------------------------------------- Tim maintain---------------------------------------------------------------------------
beforeEach( function() {     
        cy.visit('https://www.tm-robot.com.cn/zh-hans/')//
      })
    context('AI Cobot Series picture', () => {
      Control['Wait']
    it('TM5-700', () => {
        
        cy.get('.elementor-element-86c41ae > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-700/')
    })
      it('TM5-900', () => {
        
        cy.get('.elementor-element-5b3c02c > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-900/')
    })
    it('TM12', () => {
        
        cy.get('.elementor-element-00ecd04 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm12/')
    })
    it('TM14', () => {
        
        cy.get('.elementor-element-70d69ed > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm14/')
    })
    it('TM16', () => {
        
        cy.get('.elementor-element-b0cb1b2 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm16/')
    })
    it('TM20', () => {
        
        cy.get('.elementor-element-dafcbec > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm20/')
      })
    })

    context('Embrace the Future of Automation', () => {
      it('Contact Us', () => {
        
        cy.get('.elementor-button-link').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/contact-us/')
      })
    })

    context('Footer', () => {
      it('TM5-700', () => {
        
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-700/')
    })
    it('TM5-900', () => {
        
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-900/')
    })
    it('TM12', () => {
        
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(3) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm12/')
    })
    it('TM14', () => {
        
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(4) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm14/')
    })
    it('TM16', () => {
        
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(5) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm16/')
    })
    it('TM20', () => {
        
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(6) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm20/')
    })
    it('mobile series', () => {
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(7) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/mobile-series/')
    })
    it('TM AI+ AOI Edge', () => {
        cy.get('#elementor-tab-title-1452 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1452 > ul > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
    })
    it('TM 3DVision', () => {
        cy.get('#elementor-tab-title-1452 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1452 > ul > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-3dvision/')
      })

      it('TM AI+ Training Server', () => {
        cy.get('#elementor-tab-title-3201 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-3201 > ul > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-training-server/')
      })
      it('TM AI+ AOI Edge', () => {
        cy.get('#elementor-tab-title-3201 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-3201 > ul > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
    })
    it('TM Image Manger', () => {
        cy.get('#elementor-tab-title-3201 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-3201 > ul > :nth-child(3) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-image-manager/')
    })
    it('TM Palletzing Solutions', () => {
        cy.get('#elementor-tab-title-3202 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-3202 > ul > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-palletizing-solutions/')
    })
    it('TM Plus&play', () => {
        cy.get('#elementor-tab-title-3203 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-3203 > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-plugandplay/')
      })
})
context('Case Sharing', () => {
      it('Application', () => {
        cy.get('.elementor-element-6f26c609 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/video-application/')
      })
      it('Industy', () => {
        cy.get('.elementor-element-6f26c609 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/industry/')
    })
    it('Successful Stories', () => {
        cy.get('.elementor-element-6f26c609 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/view-case-study-look/')
      })
})
    context('Traing Support', () => {
        it('Contant Us', () => {
            cy.get('.elementor-element-72e3b1ca > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/contact-us/')
        })
        it('Download Center', () => {
            cy.get('.elementor-element-72e3b1ca > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/download-center/')
        })
        it('Technical Documet', () => {
            cy.get('.elementor-element-72e3b1ca > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/docs/')
        })
        it('Online Training', () => {
            cy.get('.elementor-element-72e3b1ca > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click() 
            cy.url().should('eq', 'https://academic.tm-robot.com/')
        })
        it('TM Academic', () => {
            cy.get('.elementor-element-72e3b1ca > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-academic/')
        })
        it('Partner Area', () => {
             cy.get('.elementor-element-72e3b1ca > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
             cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/partner-area/')
        })
     })
    context('About Us', () => {
        it('About Techmen Robot', () => {
            cy.get('.elementor-element-7b4fe270 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/about-us/')
        })
        it('Company Proflie', () => {
            cy.get('.elementor-element-7b4fe270 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/company-profile/')
        })
        it('Search for Distributor', () => {
            cy.get('.elementor-element-7b4fe270 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/search-for-distributor/') 
        })
        it('TM News', () => {
            cy.get('.elementor-element-7b4fe270 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-news/')
        })
        it('Global Event', () => {
            cy.get('.elementor-element-7b4fe270 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/events-archive/') //No en
        })
        it('Omron Network', () => {
            cy.get('.elementor-element-7b4fe270 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/techman-x-omron/')
        })
        it('Media Library', () => {
            cy.get(':nth-child(7) > a > .elementor-icon-list-text').click()
            cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/media-library/')
         })

        it('TM Icon', function(){
            
            cy.get(Control['TM_icon_footer']).click()
            cy.url().should('eq','https://www.tm-robot.com.cn/zh-hans/')
        })

        // it('Privacy & Cookies Policy', function(){  //Issue
            
        //     cy.get('.elementor-heading-title > a').click()
        //     cy.url().should('eq','https://beian.miit.gov.cn/#/Integrated/index')
        //     cy.get(Control['TM_icon_footer']).click()
        //     })
        })
      
})