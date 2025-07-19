import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuHomeComponent } from "./menu-home/menu-home.component";
import { ExpirienceHomeComponent } from './presentation-home/presentation-home.component';
import { FooterHomeComponent } from "./footer-home/footer-home.component";
import { ExperienceHomeComponent } from "./experience-home/experience-home.component";
import { ProyectsHomeComponent } from "./proyects-home/proyects-home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [MenuHomeComponent, ExpirienceHomeComponent, FooterHomeComponent, ExperienceHomeComponent, ProyectsHomeComponent, AboutMeComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent { }
