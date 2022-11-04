import Control from "../common/user/userControl.js"
var header = String.empty;

describe('官網測試', function() {
  
    // context('Top bar', function() {

    //   beforeEach( function() {     
    //     cy.visit('https://www.tm-robot.com/en/')
    //   })

    //   it('TM Icon', function(){
    //     cy.get(Control['TM_icon']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/')
    //   })
      
    //   it('Login', function(){
    //     cy.get(Control['Login']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/login/')
    //   })
  
    //   // // 切換語言Button找不到元素
    //   // it('Language', function(){
    //   //   cy.get(Control['Language']).contains('English').dblclick({force : true})
    //   //   cy.url().should('eq','https://www.tm-robot.com/en/')
    //   // })
    // })

    // context('Menu bar', function() {

    //   beforeEach( function() {     
    //     cy.visit('https://www.tm-robot.com/en/')
    //     if(header == String.empty)
    //     { cy.get(Control['AI_cobot']).dblclick({force: true}) }
    //     else if (header == "Solution & Services")
    //     { cy.get(Control['Solution-Serices']).dblclick({force: true}) }
    //     else if (header == "Case Sharing")
    //     { cy.get(Control['Case-Sharing']).dblclick({force: true}) }
    //     else if (header == "Training-Support")
    //     { cy.get(Control['Training-Support']).dblclick({force: true}) }
    //     else if (header == 'About Us')
    //     { cy.get(Control['About-Us']).dblclick({force: true}) }
    //   })

    //   it('AI Cobot [TMRobot、TMvision、Accessories & Software]', function(){
    //     cy.get(Control['700']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm5-700/')
    //     cy.get(Control['900']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm5-900/')
    //     cy.get(Control['12']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm12/')
    //     cy.get(Control['14']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm14/')
    //     cy.get(Control['16']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm16/')
    //     cy.get(Control['20']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm20/')
    //     cy.get(Control['Mobile']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/mobile-series/')
    //     cy.get(Control['vAOI']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-aoi-edge/')
    //     cy.get(Control['3D']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-3dvision/')
    //     cy.get(Control['Add-on']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-add-on/')
    //     cy.get(Control['Accessories']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/accessories-category/accessory-device/')
    //     header = "Solution & Services";
    //   })

    //   it('Solution & Services [AI、Integration Service、Partner Service]', function(){
    //     cy.get(Control['TrainingServer']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-training-server/')
    //     cy.get(Control['aAOI']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-ai-aoi-edge/')
    //     cy.get(Control['Image']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-image-manager/')
    //     cy.get(Control['Palletizing']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-palletizing-solutions/')
    //     cy.get(Control['Plug&Play']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-plugandplay/')
    //     header = "Case Sharing";
    //   })

    //   it('Case Sharing', function(){
    //     cy.get(Control['Application']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/video-application/')
    //     cy.get(Control['Industry']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/industry/')
    //     cy.get(Control['Successful']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/view-case-study-look/')
    //     header = "Training & Support";
    //   })

    //   it('Training & Support', function(){
    //     cy.get(Control['Academic']).click()
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-academic/')
    //     cy.get(Control['OnlineTraining']).click({force: true})
    //     cy.url().should('eq','https://academic.tm-robot.com/')
    //     cy.get(Control['Contact']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/contact-us/')
    //     cy.get(Control['DownloadCenter']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/download-center/')
    //     cy.get(Control['TechnicalDocument']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/docs/')
    //     cy.get(Control['PartnerArea']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/partner-login/')
    //     header = "About Us";
    //   })

    //   it('About Us', function(){
    //     cy.get(Control['AboutUs']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/about-us/')
    //     cy.get(Control['CompanyProfile']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/company-profile/')
    //     cy.get(Control['SearchForDistributor']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/search-for-distributor/')
    //     cy.get(Control['News']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/tm-news/')
    //     cy.get(Control['GlobalEvent']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/events-archive/')
    //     cy.get(Control['OmronNetwork']).click({force: true})
    //     cy.url().should('eq','https://www.tm-robot.com/en/techman-x-omron/')
    //     header = String.empty;
    //   })
    // })

    context('Applications 循環圖片', function() {
        
      beforeEach( function() {     
        cy.visit('https://www.tm-robot.com/en/')
      })

      it('Food Packaging and Palletizing at Cheese Factory', function(){
        cy.get(Control['AppTag1']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/food-packaging-and-palletizing-at-cheese-factory/')
      })

      it('TM Robot + AMR Application Example', function(){
        cy.get(Control['AppTag2']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/tm-robot-amr-application-example/')
      })

      it('Factory Automation: PCB Assembly', function(){
        cy.get(Control['AppTag1']).click()
        cy.url().should('eq', 'https://www.tm-robot.com/en/application-videoapp/factory-automation-pcb-assembly/')
      })

      it('Food Packaging', function(){
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-next > .raven-post-wrapper > .raven-post > .raven-post-image-wrap > .raven-post-image > .raven-post-image-overlay').click();
        cy.get('.elementor-element-0843aa0 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .raven-widget-wrapper > .raven-site-logo > .raven-site-logo-link > .raven-site-logo-desktop').click();
        cy.get('.elementor-element-1a672be').click();
        /* ==== End Cypress Studio ==== */
      })
    })
})