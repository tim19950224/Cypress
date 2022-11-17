import Control from "../common/user/userControl.js"
/*
describe('Top bar', function() {
  
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

describe('Menu bar', function() {

    context('AI Cobot', function() { 

      beforeEach( function() {     
        cy.visit('https://www.tm-robot.com/en/')
        cy.get(Control['AI_cobot']).dblclick({force : true})
      })
    
      it('TM5-700', function(){
        
      })
    
      it('AI_cobot', function(){
        cy.get(Control['AI_cobot']).dblclick({force : true})
        
      })
    
    
    })
})

// describe('TM AI+ 測試', function() {
    
//       context('登入頁面測試', function() {
//         it('當輸入正確帳號密碼,應登入成功', function(){
//           cy.visit('https://172.25.50.51:8080/#/login')
//           cy.fixture('userLogin').then(({Email, Password}) => {
//             cy.get('input[type=email]').clear()
//             cy.get('input[type=email]').type(Email)
//             cy.get('input[type=password').clear()
//             cy.get('input[type=password').type(Password)
//             cy.get('.btn').contains('提交').click({force: true})
//             /* ==== Generated with Cypress Studio ==== */
//             cy.get(':nth-child(4) > .nav-link').click();
//             cy.get(':nth-child(1) > .rt-tr > [style="flex: 220 0 auto; width: 220px; max-width: 220px;"] > .btn-group > .btn-btn').click();
//             cy.get('.mb-1 > .btn').click();
//             cy.get('.mb-1 > .btn').click();
//             // cy.get('#btnNext').click().then((number) =>{
              
//             //   if(page == "") cy.get(':nth-child(2) > .LazyLoad > img').click() 
//             // })

//             // cy.get('.row').find('.text-right').invoke('text').then((text) => {
              
//             //   cy.log(expect(text.trim()).equal('0/36')) //cy.get('#btnNext').click()
//             // })
            
//             cy.get('.text-right')
            
//             /* ==== End Cypress Studio ==== */
//           }) 
          
//         })
//       })
    
    // context('PCHOME介面測試', function() {
    //   it('Login', () => {
    //     cy.visit('https://24h.pchome.com.tw/?gclid=CjwKCAjwwL6aBhBlEiwADycBIEkx-kmI2BAaeM-ygyfSy-XYwV8MtdS-zi3j02H89V2djnYoLO36hhoCbREQAvD_BwE');
    //     //cy.get('.a12word__box:nth-child(1)').click();
    //     //cy.get('').click({force: true})
    //     //cy.get('.raven-menu-item.raven-link-item.has-submenu').contains('TM Robot').dblclick({force: true});
    //     //cy.url().should('eq', 'https://www.tm-robot.com/en/tm-robot/')
    //     /* ==== Generated with Cypress Studio ==== */
    //     cy.get('.c-siteSearchInput').type('洗衣球{enter}');
    //     cy.get('#DAAK7P-A900F3MDD > .c2f > .prod_name > a').invoke('removeAttr','target').click();
    //     /* ==== End Cypress Studio ==== */
    //   })
    // })
  // })



  //-------------------------------------------------------------------------------------- Tim maintain

  describe('AI Cobot Series', () => {
    Control['Wait']
    //cn/zh-hans
  //   it('Models', () => {
  //   cy.visit('https://www.tm-robot.com.cn/zh-hans/')
  //   cy.get('.elementor-element-86c41ae > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
  //   cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-700/')
  //   cy.visit('https://www.tm-robot.com.cn/zh-hans/')
  //   cy.get('.elementor-element-5b3c02c > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
  //   cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-900/')
  //   cy.visit('https://www.tm-robot.com.cn/zh-hans/')
  //   cy.get('.elementor-element-00ecd04 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-full').click();
  //   cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm12/')
  //   cy.visit('https://www.tm-robot.com.cn/zh-hans/')
  //   cy.get('.elementor-element-70d69ed > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
  //   cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm14/')
  //   cy.visit('https://www.tm-robot.com.cn/zh-hans/')
  //   cy.get('.elementor-element-b0cb1b2 > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
  //   cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm16/')
  //   cy.visit('https://www.tm-robot.com.cn/zh-hans/')
  //   cy.get('.elementor-element-dafcbec > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-image > a > .attachment-large').click();
  //   cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm20/')
  // })
  describe('Footer', () => {
    
    context('AI Cobot', () => {
      //cy.url().should('eq', '')
      
     // cy.get('#elementor-tab-title-1731 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas')
      it('TM-700', () => {
        cy.visit('https://www.tm-robot.com.cn/zh-hans/')
        cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
        cy.get('#elementor-tab-content-1451 > ul > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-700/')
      })
      
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(2) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm5-900/')
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(3) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm12/')
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(4) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm14/')
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(5) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm16/')
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(6) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm20/')
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(7) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/mobile-series/')
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(1) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
      // cy.get('#elementor-tab-title-1451 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      // cy.get('#elementor-tab-content-1451 > ul > :nth-child(2) > a').click()
      // cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-3dvision/')
    })
    it('Solution & Services', () => {
      cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      cy.get('#elementor-tab-content-7271 > ul > :nth-child(1) > a').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-training-server/')
      cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      cy.get('#elementor-tab-content-7271 > ul > :nth-child(2) > a').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-ai-aoi-edge/')
      cy.get('#elementor-tab-title-7271 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      cy.get('#elementor-tab-content-7271 > ul > :nth-child(3) > a').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-image-manager/')

      cy.get('#elementor-tab-title-7272 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      cy.get('#elementor-tab-content-7272 > ul > li > a').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-palletizing-solutions/')

      cy.get('#elementor-tab-title-7273 > .elementor-toggle-icon > .elementor-toggle-icon-closed > .fas').click()
      cy.get('#elementor-tab-content-7273 > ul > li > a').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-plugandplay/')
      })
    it('Case Sharing', () => {
    // cy.visit('https://www.tm-robot.com.cn/zh-hans/')
      cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/video-application/')
      cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/industry/')
      cy.get('.elementor-element-23905acc > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/view-case-study-look/')
    })

    it('Traing Support', () => {
      cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/contact-us/')
      cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/download-center/')
      cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/docs/')
      cy.visit('https://www.tm-robot.com.cn/zh-hans/')
      cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click() 
      cy.url().should('eq', 'https://academic.tm-robot.com/')
      cy.visit('https://www.tm-robot.com.cn/zh-hans/')
      cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-academic/')
      cy.get('.elementor-element-280e338 > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/partner-area/')
    })
  
    it('About Us', () => {
      cy.visit('https://www.tm-robot.com.cn/zh-hans/')
      cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(1) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/about-us/')
      cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(2) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/company-profile/')
      cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(3) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/search-for-distributor/') 
      cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(4) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/tm-news/')
      cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(5) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com/events-archive/') //No en
      cy.get('.elementor-element-51bbb9f > .elementor-widget-container > .elementor-icon-list-items > :nth-child(6) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/techman-x-omron/')
      cy.get(':nth-child(7) > a > .elementor-icon-list-text').click()
      cy.url().should('eq', 'https://www.tm-robot.com.cn/zh-hans/media-library/')
    })
  })
  it('test', () => {
   
  })

})


describe('Today Maintain', () => {

  it('test', () => {
    cy.visit('https://www.tm-robot.com.cn/zh-hans/') // Error  簡體-> https://www.tm-robot.com.cn/zh-hans/
    //cy.get('#sm-16679805287457437-1 > .wpml-ls-native').click()
    //cy.get('#sm-16679806833877231-1').click()
    //cy.get('.elementor-widget-container > nav > ul > :nth-child(2) > a > ul > :nth-child(1)').click()
    //cy.get('.elementor-widget-container > nav > ul > :nth-child(2)').click()
    // cy.get('.elementor-widget-container > nav > ul > :nth-child(2) > ul > :nth-child(2) > a').click({force: true})
    cy.get('.elementor-widget-container > nav > ul > :nth-child(2) > ul > :nth-child(1) > a').click({force: true})
//*[@id="sm-16679948539322805-1"]
//*[@id="sm-1667995646948556-1"]
{/* <div id="elementor-tab-content-7271" class="elementor-tab-content elementor-clearfix elementor-active" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-7271" style="display: block;"><ul><li><a href="https://www.tm-robot.com/en/tm-ai-training-server/">TM AI+ Training Server</a></li><li><a href="https://www.tm-robot.com/en/tm-ai-aoi-edge/">TM AI+ AOI Edge</a></li><li><a href="https://www.tm-robot.com/en/tm-image-manager/">TM Image Manger</a></li></ul></div>
cy.get('#elementor-tab-content-7271 > ul > :nth-child(1) > a') */}

    })
  })