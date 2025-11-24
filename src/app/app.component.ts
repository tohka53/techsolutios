import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechSolutions';
  
  projects = [
    {
      title: 'MemiInk',
      description: 'Plataforma web moderna para servicios de tatuajes y arte corporal',
      type: 'Página Web',
      image: 'https://www.memiink.com/assets/img/fotomem.png',
      link: 'https://www.memiink.com',
      tags: ['Web Design', 'E-commerce', 'Booking System']
    },
    {
      title: 'RehabiMovement',
      description: 'CRM completo para gestión de clínicas de rehabilitación física',
      type: 'CRM Personalizado',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      link: 'https://www.rehabimovementgt.com/',
      tags: ['CRM', 'Healthcare', 'Management']
    },
    {
      title: 'MIA Tracker',
      description: 'Aplicación móvil para seguimiento y gestión de actividades',
      type: 'Aplicación Móvil',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
      link: 'https://www.miatracker.com/',
      tags: ['Mobile App', 'Tracking', 'Analytics']
    },
    {
      title: 'Qualitech Boston',
      description: 'Taxes and Accounting Services App',
      type: 'Consultoría Informática',
      image: 'https://www.qualitechboston.com/wp-content/uploads/2021/02/front-Qualitech-700x780-portrait.jpg',
      link: 'https://www.qualitechboston.com/',
      tags: ['Taxes', 'Analytics']
    }
  ];

  services = [
    {
      icon: '🎯',
      title: 'CRM Personalizados',
      description: 'Sistemas de gestión de clientes adaptados a las necesidades específicas de tu negocio'
    },
    {
      icon: '⚙️',
      title: 'ERP Personalizados',
      description: 'Soluciones empresariales completas para optimizar todos tus procesos internos'
    },
    {
      icon: '📱',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y multiplataforma para iOS y Android con experiencias excepcionales'
    },
    {
      icon: '💻',
      title: 'Aplicaciones Web',
      description: 'Plataformas web robustas y escalables con las últimas tecnologías'
    },
    {
      icon: '🌐',
      title: 'Páginas Web',
      description: 'Sitios web modernos, responsivos y optimizados para SEO'
    },
    {
      icon: '🔍',
      title: 'Consultoría Informática',
      description: 'Asesoría estratégica para la transformación digital de tu empresa'
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}