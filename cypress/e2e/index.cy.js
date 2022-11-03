import Control from "../common/user/userControl.js"

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