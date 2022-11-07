import Control from "../common/user/userControl.js"
var header = String.empty;

describe('官網測試', function() {
  
    context('Top bar', function() {

      beforeEach( function() {     
        cy.visit('https://www.tm-robot.com/en/')
      })

      it('TM Icon', function(){
        cy.get(Control['TM_icon']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/')
      })
      
      it('Login', function(){
        cy.get(Control['Login']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/login/')
      })
  
      // // 切換語言Button找不到元素
      // it('Language', function(){
      //   cy.get(Control['Language']).contains('English').dblclick({force : true})
      //   cy.url().should('eq','https://www.tm-robot.com/en/')
      // })
    })

    context('Menu bar', function() {

      beforeEach( function() {     
        cy.visit('https://www.tm-robot.com/en/')
      })

      it('AI Cobot [TMRobot、TMvision、Accessories & Software]', function(){
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['700']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm5-700/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['900']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm5-900/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['12']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm12/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['14']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm14/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['16']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm16/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['20']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm20/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['Mobile']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/mobile-series/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['vAOI']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-aoi-edge/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['3D']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-3dvision/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['Add-on']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-add-on/')
        cy.get(Control['AI_cobot']).click()
        cy.get(Control['Accessories']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/accessories-category/accessory-device/')
      })

      it('Solution & Services [AI、Integration Service、Partner Service]', function(){
        cy.get(Control['Solution-Serices']).click()
        cy.get(Control['TrainingServer']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-training-server/')
        cy.get(Control['Solution-Serices']).click()
        cy.get(Control['aAOI']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-aoi-edge/')
        cy.get(Control['Solution-Serices']).click()
        cy.get(Control['Image']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-image-manager/')
        cy.get(Control['Solution-Serices']).click()
        cy.get(Control['Palletizing']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-palletizing-solutions/')
        cy.get(Control['Solution-Serices']).click()
        cy.get(Control['Plug&Play']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-plugandplay/')
      })

      it('Case Sharing', function(){
        cy.get(Control['Case-Sharing']).click()
        cy.get(Control['Application']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/video-application/')
        cy.get(Control['Case-Sharing']).click()
        cy.get(Control['Industry']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/industry/')
        cy.get(Control['Case-Sharing']).click()
        cy.get(Control['Successful']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/view-case-study-look/')
      })

      it('Training & Support', function(){
        cy.get(Control['Training-Support']).click()
        cy.get(Control['Academic']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-academic/')
        cy.get(Control['Training-Support']).click()
        cy.get(Control['OnlineTraining']).click()
        cy.url().should('eq','https://academic.tm-robot.com/')
        cy.visit('https://www.tm-robot.com/en/')
        cy.get(Control['Training-Support']).click()
        cy.get(Control['Contact']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/contact-us/')
        cy.get(Control['Training-Support']).click()
        cy.get(Control['DownloadCenter']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/download-center/')
        cy.get(Control['Training-Support']).click()
        cy.get(Control['TechnicalDocument']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/docs/')
        cy.get(Control['Training-Support']).click()
        cy.get(Control['PartnerArea']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/partner-login/')
      })

      it('About Us', function(){
        cy.get(Control['About-Us']).click()
        cy.get(Control['AboutUs']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/about-us/')
        cy.get(Control['About-Us']).click()
        cy.get(Control['CompanyProfile']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/company-profile/')
        cy.get(Control['About-Us']).click()
        cy.get(Control['SearchForDistributor']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/search-for-distributor/')
        cy.get(Control['About-Us']).click()
        cy.get(Control['News']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/tm-news/')
        cy.get(Control['About-Us']).click()
        cy.get(Control['GlobalEvent']).click()
        cy.url().should('eq','https://www.tm-robot.com/events-archive/')
        cy.get(Control['About-Us']).click()
        cy.get(Control['OmronNetwork']).click()
        cy.url().should('eq','https://www.tm-robot.com/en/techman-x-omron/')
      })
    })

    context('Applications 循環圖片', function() {
        
      beforeEach( function() {   
        if (header == String.empty)
        { cy.visit('https://www.tm-robot.com/en/') }
        else
        { cy.get(Control["TM_icon"]).click() } 
      })

      it('Food Packaging and Palletizing at Cheese Factory', function(){
        cy.get(Control['AppTag1']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/food-packaging-and-palletizing-at-cheese-factory/')
        header = "Next";
      })

      it('TM Robot + AMR Application Example', function(){
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/tm-robot-amr-application-example/')
      })

      it('Factory Automation: PCB Assembly', function(){
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/factory-automation-pcb-assembly/')
      })

      it('Factory Automation: Automatic Screwing', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/factory-automation-automatic-screwing/')
      })

      it('Automotive Component Assembly', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/automotive-component-assembly/')
      })

      it('TM Robot Frying French Fries', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/tm-robot-frying-french-fries/')
      })

      it('Cooking Takoyaki with TM Robot', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/cooking-takoyaki-with-tm-robot/')
      })

      it('Food Service and Restaurant Industry Application with TM Robot', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/food-service-and-restaurant-industry-application-with-tm-robot/')
      })

      it('Metal Welding', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).click()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/metal-welding/')
      })

      it('Screw Driving with Atlas Copco', function() {
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['IndexApplications_BNext']).dblclick()
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/screw-driving-with-atlas-copco/')
      })
    })
})