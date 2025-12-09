import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TechSolutions';
  currentLang = 'es';
  isScrolled = false;
  mobileMenuOpen = false;

  // Traducciones
  translations: { [key: string]: { [key: string]: string } } = {
    es: {
      // Nav
      'nav.services': 'Servicios',
      'nav.problems': 'Soluciones',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contáctanos',
      
      // Hero
      'hero.badge': 'Desarrollo de Software a Medida',
      'hero.title1': 'Eliminamos procesos manuales y',
      'hero.title2': 'digitalizamos tu negocio',
      'hero.subtitle': 'Reemplazamos Excel, formularios y controles por WhatsApp con soluciones digitales ágiles. CRM, ERP, aplicaciones móviles y web que se adaptan perfectamente a tus necesidades.',
      'hero.cta1': 'Cotización Gratis',
      'hero.cta2': 'Ver Proyectos',
      
      // Problems
      'problems.title': 'Problemas que Resolvemos',
      'problems.subtitle': 'Estos son los desafíos más comunes que enfrentan nuestros clientes antes de trabajar con nosotros',
      
      // Services
      'services.title': 'Nuestros Servicios',
      'services.subtitle': 'Soluciones tecnológicas completas para hacer crecer tu negocio',
      
      // Stats
      'stats.title': 'Resultados que Hablan',
      'stats.subtitle': 'Números que demuestran nuestro compromiso con la excelencia',
      
      // Projects
      'projects.title': 'Proyectos Destacados',
      'projects.subtitle': 'Casos de éxito que demuestran nuestra experiencia',
      'projects.view': 'Ver Proyecto',
      
      // Contact
      'contact.title': '¿Listo para transformar tu negocio?',
      'contact.subtitle': 'Cuéntanos sobre tu idea y te ayudaremos a convertirla en realidad. Nuestro equipo está listo para impulsar tu negocio al siguiente nivel.',
      'contact.benefit1': 'Respuesta en menos de 24 horas',
      'contact.benefit2': 'Consultoría inicial gratuita',
      'contact.benefit3': 'Presupuesto sin compromiso',
      'contact.name': 'Nombre completo',
      'contact.email': 'Email',
      'contact.phone': 'Teléfono',
      'contact.service': 'Servicio de interés',
      'contact.service.select': 'Selecciona un servicio',
      'contact.message': 'Cuéntanos sobre tu proyecto',
      'contact.message.placeholder': 'Describe brevemente tu proyecto o necesidad...',
      'contact.submit': 'Enviar Mensaje',
      
      // Footer
      'footer.tagline': 'Desarrollando el futuro digital',
      'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
      // Nav
      'nav.services': 'Services',
      'nav.problems': 'Solutions',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact Us',
      
      // Hero
      'hero.badge': 'Custom Software Development',
      'hero.title1': 'We eliminate manual processes and',
      'hero.title2': 'digitize your business',
      'hero.subtitle': 'We replace Excel, forms, and WhatsApp controls with agile digital solutions. CRM, ERP, mobile and web applications perfectly adapted to your needs.',
      'hero.cta1': 'Free Quote',
      'hero.cta2': 'View Projects',
      
      // Problems
      'problems.title': 'Problems We Solve',
      'problems.subtitle': 'These are the most common challenges our clients face before working with us',
      
      // Services
      'services.title': 'Our Services',
      'services.subtitle': 'Complete technological solutions to grow your business',
      
      // Stats
      'stats.title': 'Results That Speak',
      'stats.subtitle': 'Numbers that demonstrate our commitment to excellence',
      
      // Projects
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Success stories that demonstrate our experience',
      'projects.view': 'View Project',
      
      // Contact
      'contact.title': 'Ready to transform your business?',
      'contact.subtitle': 'Tell us about your idea and we will help you make it a reality. Our team is ready to take your business to the next level.',
      'contact.benefit1': 'Response in less than 24 hours',
      'contact.benefit2': 'Free initial consultation',
      'contact.benefit3': 'No obligation quote',
      'contact.name': 'Full name',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.service': 'Service of interest',
      'contact.service.select': 'Select a service',
      'contact.message': 'Tell us about your project',
      'contact.message.placeholder': 'Briefly describe your project or need...',
      'contact.submit': 'Send Message',
      
      // Footer
      'footer.tagline': 'Developing the digital future',
      'footer.rights': 'All rights reserved.'
    }
  };

  // Problemas que resolvemos
  problems = [
    {
      icon: '📊',
      title: { es: 'Procesos Anticuados', en: 'Outdated Processes' },
      description: { 
        es: 'Excel, papel y WhatsApp creando caos operacional en tu empresa', 
        en: 'Excel, paper and WhatsApp creating operational chaos in your company' 
      }
    },
    {
      icon: '💸',
      title: { es: 'Pérdida de Tiempo y Dinero', en: 'Wasted Time and Money' },
      description: { 
        es: 'Errores humanos e información dispersa que cuestan miles cada año', 
        en: 'Human errors and scattered information costing thousands each year' 
      }
    },
    {
      icon: '🔍',
      title: { es: 'Falta de Control', en: 'Lack of Control' },
      description: { 
        es: 'Sin visibilidad sobre operaciones, equipos y procesos críticos', 
        en: 'No visibility over operations, teams and critical processes' 
      }
    },
    {
      icon: '⏱️',
      title: { es: 'Datos Desactualizados', en: 'Outdated Data' },
      description: { 
        es: 'Dificultad para acceder a información en tiempo real', 
        en: 'Difficulty accessing real-time information' 
      }
    },
    {
      icon: '📋',
      title: { es: 'Reportes Imprecisos', en: 'Inaccurate Reports' },
      description: { 
        es: 'Duplicidad de información y errores constantes en informes', 
        en: 'Information duplication and constant errors in reports' 
      }
    },
    {
      icon: '📈',
      title: { es: 'Escalabilidad Limitada', en: 'Limited Scalability' },
      description: { 
        es: 'Imposibilidad de crecer o auditar procesos eficientemente', 
        en: 'Inability to grow or audit processes efficiently' 
      }
    }
  ];

  // Estadísticas
  stats = [
    {
      number: '50+',
      label: { es: 'Proyectos Completados', en: 'Completed Projects' },
      icon: '🚀'
    },
    {
      number: '98%',
      label: { es: 'Clientes Satisfechos', en: 'Satisfied Clients' },
      icon: '⭐'
    },
    {
      number: '24h',
      label: { es: 'Tiempo de Respuesta', en: 'Response Time' },
      icon: '⚡'
    },
    {
      number: '5+',
      label: { es: 'Años de Experiencia', en: 'Years of Experience' },
      icon: '🏆'
    }
  ];

  projects = [
    {
      title: 'MemiInk',
      description: { 
        es: 'Plataforma web moderna para servicios de tatuajes y arte corporal con sistema de reservas integrado', 
        en: 'Modern web platform for tattoo and body art services with integrated booking system' 
      },
      type: { es: 'Página Web', en: 'Website' },
      image: 'https://www.memiink.com/assets/img/fotomem.png',
      link: 'https://www.memiink.com',
      tags: ['Web Design', 'E-commerce', 'Booking System']
    },
    {
      title: 'RehabiMovement',
      description: { 
        es: 'CRM completo para gestión de clínicas de rehabilitación física con seguimiento de pacientes', 
        en: 'Complete CRM for physical rehabilitation clinic management with patient tracking' 
      },
      type: { es: 'CRM Personalizado', en: 'Custom CRM' },
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      link: 'https://www.rehabimovementgt.com/',
      tags: ['CRM', 'Healthcare', 'Management']
    },
    {
      title: 'MIA Tracker',
      description: { 
        es: 'Aplicación móvil para seguimiento y gestión de actividades con analytics en tiempo real', 
        en: 'Mobile app for activity tracking and management with real-time analytics' 
      },
      type: { es: 'Aplicación Móvil', en: 'Mobile App' },
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      link: 'https://www.miatracker.com/',
      tags: ['Mobile App', 'Tracking', 'Analytics']
    },
    {
      title: 'Qualitech Boston',
      description: { 
        es: 'Sistema web para servicios de impuestos y contabilidad con integración de documentos', 
        en: 'Web system for tax and accounting services with document integration' 
      },
      type: { es: 'Aplicación Web', en: 'Web Application' },
      image: 'https://www.qualitechboston.com/wp-content/uploads/2021/02/front-Qualitech-700x780-portrait.jpg',
      link: 'https://www.qualitechboston.com/',
      tags: ['Taxes', 'Accounting', 'Analytics']
    }
  ];

  services = [
    {
      icon: '🎯',
      title: { es: 'CRM Personalizados', en: 'Custom CRM' },
      description: { 
        es: 'Sistemas de gestión de clientes adaptados a las necesidades específicas de tu negocio', 
        en: 'Customer management systems adapted to your specific business needs' 
      }
    },
    {
      icon: '⚙️',
      title: { es: 'ERP Personalizados', en: 'Custom ERP' },
      description: { 
        es: 'Soluciones empresariales completas para optimizar todos tus procesos internos', 
        en: 'Complete business solutions to optimize all your internal processes' 
      }
    },
    {
      icon: '📱',
      title: { es: 'Aplicaciones Móviles', en: 'Mobile Applications' },
      description: { 
        es: 'Apps nativas y multiplataforma para iOS y Android con experiencias excepcionales', 
        en: 'Native and cross-platform apps for iOS and Android with exceptional experiences' 
      }
    },
    {
      icon: '💻',
      title: { es: 'Aplicaciones Web', en: 'Web Applications' },
      description: { 
        es: 'Plataformas web robustas y escalables con las últimas tecnologías', 
        en: 'Robust and scalable web platforms with the latest technologies' 
      }
    },
    {
      icon: '🌐',
      title: { es: 'Páginas Web', en: 'Websites' },
      description: { 
        es: 'Sitios web modernos, responsivos y optimizados para SEO', 
        en: 'Modern, responsive websites optimized for SEO' 
      }
    },
    {
      icon: '💌',
      title: { es: 'Invitaciones Electrónicas', en: 'Digital Invitations' },
      description: { 
        es: 'Invitaciones digitales interactivas para bodas, cumpleaños, eventos corporativos y celebraciones', 
        en: 'Interactive digital invitations for weddings, birthdays, corporate events and celebrations' 
      }
    },
    {
      icon: '🔍',
      title: { es: 'Consultoría Informática', en: 'IT Consulting' },
      description: { 
        es: 'Asesoría estratégica para la transformación digital de tu empresa', 
        en: 'Strategic advice for the digital transformation of your company' 
      }
    }
  ];

  serviceOptions = [
    { value: 'CRM', label: { es: 'CRM Personalizado', en: 'Custom CRM' } },
    { value: 'ERP', label: { es: 'ERP Personalizado', en: 'Custom ERP' } },
    { value: 'Mobile', label: { es: 'Aplicación Móvil', en: 'Mobile Application' } },
    { value: 'Web App', label: { es: 'Aplicación Web', en: 'Web Application' } },
    { value: 'Website', label: { es: 'Página Web', en: 'Website' } },
    { value: 'Invitations', label: { es: 'Invitaciones Electrónicas', en: 'Digital Invitations' } },
    { value: 'Consultoria', label: { es: 'Consultoría Informática', en: 'IT Consulting' } }
  ];

  ngOnInit() {
    // Detectar idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    this.currentLang = ['es', 'en'].includes(browserLang) ? browserLang : 'es';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  t(key: string): string {
    return this.translations[this.currentLang]?.[key] || key;
  }

  getLocalizedText(obj: { es: string; en: string }): string {
    return obj[this.currentLang as 'es' | 'en'] || obj.es;
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  // Form data
  formData = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };
  
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  scrollToSection(sectionId: string) {
    this.mobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  async submitForm(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('https://formsubmit.co/ajax/mecg1994@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.submitSuccess = true;
        this.formData = { name: '', email: '', phone: '', service: '', message: '' };
        formElement.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } else {
        this.submitError = true;
      }
    } catch (error) {
      console.error('Error:', error);
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }
}