describe('Formulario de Registro', () => {
    beforeEach(() => {
      cy.visit('/registro.html')
    })
  
    it('debe cargar el formulario correctamente', () => {
      cy.get('form').should('be.visible')
      cy.get('input[name="nombre"]').should('exist')
      cy.get('input[name="email"]').should('exist')
      cy.get('input[name="password"]').should('exist')
      cy.get('input[name="confirmPassword"]').should('exist')
      cy.get('input[name="fechaNacimiento"]').should('exist')
      cy.get('input[name="terminos"]').should('exist')
      cy.get('button[type="submit"]').should('exist')
    })
  
    it('debe mostrar errores para campos obligatorios vacíos', () => {
      cy.get('button[type="submit"]').click()
      cy.get('[data-error="nombre"]').should('be.visible')
      cy.get('[data-error="email"]').should('be.visible')
      cy.get('[data-error="password"]').should('be.visible')
      cy.get('[data-error="terminos"]').should('be.visible')
    })
  
    it('debe validar formato de correo electrónico', () => {
      cy.get('input[name="email"]').type('correo-invalido')
      cy.get('input[name="email"]').blur()
      cy.get('[data-error="email"]').should('be.visible')
      cy.get('[data-error="email"]').should('contain', 'formato válido')
      
      cy.get('input[name="email"]').clear().type('correo@valido.com')
      cy.get('input[name="email"]').blur()
      cy.get('[data-error="email"]').should('not.be.visible')
    })
  
    it('debe validar requisitos de contraseña', () => {
      cy.get('input[name="password"]').type('abc123')
      cy.get('input[name="password"]').blur()
      cy.get('[data-error="password"]').should('be.visible')
      
      cy.get('input[name="password"]').clear().type('Abc12345')
      cy.get('input[name="password"]').blur()
      cy.get('[data-error="password"]').should('not.be.visible')
    })
  
    it('debe verificar coincidencia de contraseñas', () => {
      cy.get('input[name="password"]').type('Abc12345')
      cy.get('input[name="confirmPassword"]').type('Abc123456')
      cy.get('input[name="confirmPassword"]').blur()
      cy.get('[data-error="confirmPassword"]').should('be.visible')
      
      cy.get('input[name="confirmPassword"]').clear().type('Abc12345')
      cy.get('input[name="confirmPassword"]').blur()
      cy.get('[data-error="confirmPassword"]').should('not.be.visible')
    })
  
    it('debe habilitar/deshabilitar el botón de envío según validaciones', () => {
     
      cy.get('button[type="submit"]').should('be.disabled')
      
      
      cy.get('input[name="nombre"]').type('Juan Pérez')
      cy.get('input[name="email"]').type('juan@example.com')
      cy.get('input[name="password"]').type('abc123') 
      cy.get('input[name="confirmPassword"]').type('abc123')
      cy.get('input[name="terminos"]').check()
      
      
      cy.get('button[type="submit"]').should('be.disabled')
      
      
      cy.get('input[name="password"]').clear().type('Abc12345')
      cy.get('input[name="confirmPassword"]').clear().type('Abc12345')
      
     
      cy.get('button[type="submit"]').should('not.be.disabled')
    })
  
    it('debe completar el registro exitosamente', () => {
      cy.get('input[name="nombre"]').type('Juan Pérez')
      cy.get('input[name="email"]').type('juan@example.com')
      cy.get('input[name="password"]').type('Password123')
      cy.get('input[name="confirmPassword"]').type('Password123')
      cy.get('input[name="fechaNacimiento"]').type('1990-01-01')
      cy.get('input[name="terminos"]').check()
      
      cy.get('button[type="submit"]').click()
      
      
      cy.url().should('include', '/confirmacion.html')
      
     
      cy.get('h1').should('contain', 'Bienvenido')
      cy.get('.user-info').should('contain', 'Juan Pérez')
      cy.get('.user-info').should('contain', 'juan@example.com')
    })
  
    it('debe manejar caracteres especiales en los campos', () => {
      const nombreEspecial = 'Jüan Pér€z Ñíguez';
      cy.get('input[name="nombre"]').type(nombreEspecial)
      cy.get('input[name="email"]').type('juan.special@example.com')
      cy.get('input[name="password"]').type('Password123!')
      cy.get('input[name="confirmPassword"]').type('Password123!')
      cy.get('input[name="terminos"]').check()
      
      cy.get('button[type="submit"]').click()
      
     
      cy.url().should('include', '/confirmacion.html')
      cy.get('.user-info').should('contain', nombreEspecial)
    })
  
    it('debe rechazar inyección de script básica', () => {
      const scriptInjection = '<script>alert("XSS")</script>';
      cy.get('input[name="nombre"]').type(scriptInjection)
      cy.get('input[name="email"]').type('attack@example.com')
      cy.get('input[name="password"]').type('Password123')
      cy.get('input[name="confirmPassword"]').type('Password123')
      cy.get('input[name="terminos"]').check()
      
      cy.get('button[type="submit"]').click()
      
      
      cy.url().should('include', '/confirmacion.html')
      cy.get('.user-info').should('contain', scriptInjection)
      
    })
  })