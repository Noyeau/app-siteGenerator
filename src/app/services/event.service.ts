import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public myEvents: BehaviorSubject<any[]> = new BehaviorSubject(JSON.parse(localStorage.getItem('WebSiteGenerator')))

  constructor() {

    this.myEvents.subscribe(res=>{
      localStorage.setItem('WebSiteGenerator', JSON.stringify(res))
    })

    if(this.myEvents.value==null){
      this.initFakeDatas()

    }
  }



  initFakeDatas() {
   
    let webSite ={
      title: "mon Site",
      code: "siteDemo",
      style: {
        template: "templateRef",
        theme: "themeRef",
        menu: {
          type: "fab",
          icon: "heart-outline",
          position: "top-end-start"
        }
      },
      pages: [
        {
          title: "home",
          code: "home",
          blocs: [
            {
              type: 'image',
              settings: null,
              data: "https://www.slate.fr/sites/default/files/styles/1060x523/public/bouquet-bride-bride-and-groom-2253870.jpg"
            },
            {
              type: 'text',
              settings: null, //InfoDesign
              data: "Mal nous ce éclairé ô ton son de faite pour hélas, flanc et est grande beauté mignard nous. Face demain dont quel la mignard. Des grâces volupté qu'un atrocement contemplons. N'est autour le beauté «la. Le frémir vit le faudra. Et mensonge soeurs a nous dont, décor ce mais l'abri voluptueux la la humain coeur fatuité, coeur et parfaite fin vécu de pauvre. Florentines fait surprise chaque sur, le tete haut l'abri la frémir qu'elle. Fatuité d'un sa lits  aboutit. Elle vois mal tant flanc musculeux promettant gaze. La beauté flots ce long nous il m'appelle trésor de. Excitant grande de somptueux beauté m'appelle de demain. Loisirs le de et somptueux. Le et quel pleure-t-elle comme excitant fatale qu'un de. Et faite genoux parfaite demain ce que ce surtout la, aussi a dans de d'athlete mais charmer de qui. Elle gaze avec d'une et mensonge m'enivre. Ce tournons la pieds humain blaspheme apres-demain suborneur, déplore exquise pleure demain il âme suborneur. Que pour comme corps dont corps extase la, fatale de charmer contemplons le genoux il ce contemplons. Aux fatale qu'elle masque robuste qu'un. Genre nous pleure adorablement est d'athlete vraiment nous, soucieux volupté vaincu trait beauté et ce l'art surtout pieds. Sa ce de pleure souris  volupté loisirs a et. Non vois ce mon a l'amour a flanc cette l'abri, ce a ou grimace mince, promene charme non abondent comme il vit comme. D'une me extase m'appelle nous, et demain est beauté divin bicéphale. Parce corps autour doué aussi moqueur les, cette me flots sournois pauvre gentillesse surtout couronne» faudra, insensé de tournons faite jaillir se qu'elle ce regard, nous visage son flanc ce, quel florentines la la frémir la dans. Véritable faudra apres-demain son les sa nous, sa m'appelle fleuve charmer de encadré décor et lits, de robuste divines monstre nous qui décor ce. M'enivre voici tete d'une fin d'une en. De tete la et de qui. Vaincu face suborneur de de, trôner elle langoureux etre jusqu'aux la vécu fatale ou. Beauté majesté qu'elle et femme et sincere voluptueux renversée. Volupté de mais l'art tournons ce dans, et surtout pleurs flanc pleure n'est mettrait décor. Tout long sincere de beauté de approchons et souris vivre, dont aboutit souris et cette ce la face cette. A que mon avec ce, de mais pieds insensé mais la somptueux pour moqueur, exquise sournois vécu d'un et crispée long, ce tes décor divin toujours d'athlete de, m'enivre charme surprise coeur et. Mettrait mignard couronne» vit n'est mettrait des. Fatuité robuste beauté miraculeux face sournois la ton. Mais approchons la dont un l'amour le, dont par majesté face âme dit elle, langoureux frémir souris ce gaze soucieux l'art c'est demain. Long avec cette etre me un, ce de la de bicéphale renversée d'une ce tes la, majesté pleure toujours mais dans dont ce tes, coeur me exquise couronne» chaque parfaite qu'un grande charmer. Gentillesse d'un quel haut de âme quel robuste grâces, crispée et la trôner donne. Et langoureux grande la."
            },
            {
              type: 'timeline',
              title:"Notre histoire",
              settings: null,
              data:[
                {
                  date:"2012-05-28",
                  title:"Rencontre",
                  description:"Qu'elle véritable d'un la m'appelle etre miraculeux encadré de le. A et la pauvre cette qu'elle yeux termine non ses,."
                },
                {
                  date:"2013-04-25",
                  title:"Cocu",
                  description:"Qu'elle véritable d'un la m'appelle etre miraculeux encadré de le. A et la pauvre cette qu'elle yeux termine non ses,."
                }
              ]
            },
           
            {
              type: 'image',
              settings: null,
              data: "https://www.slate.fr/sites/default/files/styles/1060x523/public/bouquet-bride-bride-and-groom-2253870.jpg"
            },
            {
              type: 'text',
              settings: null,
              data: "Mal nous ce éclairé ô ton son de faite pour hélas, flanc et est grande beauté mignard nous. Face demain dont quel la mignard. Des grâces volupté qu'un atrocement contemplons. N'est autour le beauté «la. Le frémir vit le faudra. Et mensonge soeurs a nous dont, décor ce mais l'abri voluptueux la la humain coeur fatuité, coeur et parfaite fin vécu de pauvre. Florentines fait surprise chaque sur, le tete haut l'abri la frémir qu'elle. Fatuité d'un sa lits  aboutit. Elle vois mal tant flanc musculeux promettant gaze. La beauté flots ce long nous il m'appelle trésor de. Excitant grande de somptueux beauté m'appelle de demain. Loisirs le de et somptueux. Le et quel pleure-t-elle comme excitant fatale qu'un de. Et faite genoux parfaite demain ce que ce surtout la, aussi a dans de d'athlete mais charmer de qui. Elle gaze avec d'une et mensonge m'enivre. Ce tournons la pieds humain blaspheme apres-demain suborneur, déplore exquise pleure demain il âme suborneur. Que pour comme corps dont corps extase la, fatale de charmer contemplons le genoux il ce contemplons. Aux fatale qu'elle masque robuste qu'un. Genre nous pleure adorablement est d'athlete vraiment nous, soucieux volupté vaincu trait beauté et ce l'art surtout pieds. Sa ce de pleure souris  volupté loisirs a et. Non vois ce mon a l'amour a flanc cette l'abri, ce a ou grimace mince, promene charme non abondent comme il vit comme. D'une me extase m'appelle nous, et demain est beauté divin bicéphale. Parce corps autour doué aussi moqueur les, cette me flots sournois pauvre gentillesse surtout couronne» faudra, insensé de tournons faite jaillir se qu'elle ce regard, nous visage son flanc ce, quel florentines la la frémir la dans. Véritable faudra apres-demain son les sa nous, sa m'appelle fleuve charmer de encadré décor et lits, de robuste divines monstre nous qui décor ce. M'enivre voici tete d'une fin d'une en. De tete la et de qui. Vaincu face suborneur de de, trôner elle langoureux etre jusqu'aux la vécu fatale ou. Beauté majesté qu'elle et femme et sincere voluptueux renversée. Volupté de mais l'art tournons ce dans, et surtout pleurs flanc pleure n'est mettrait décor. Tout long sincere de beauté de approchons et souris vivre, dont aboutit souris et cette ce la face cette. A que mon avec ce, de mais pieds insensé mais la somptueux pour moqueur, exquise sournois vécu d'un et crispée long, ce tes décor divin toujours d'athlete de, m'enivre charme surprise coeur et. Mettrait mignard couronne» vit n'est mettrait des. Fatuité robuste beauté miraculeux face sournois la ton. Mais approchons la dont un l'amour le, dont par majesté face âme dit elle, langoureux frémir souris ce gaze soucieux l'art c'est demain. Long avec cette etre me un, ce de la de bicéphale renversée d'une ce tes la, majesté pleure toujours mais dans dont ce tes, coeur me exquise couronne» chaque parfaite qu'un grande charmer. Gentillesse d'un quel haut de âme quel robuste grâces, crispée et la trôner donne. Et langoureux grande la."
            },
            {
              type: 'image',
              settings: null,
              data: "https://www.slate.fr/sites/default/files/styles/1060x523/public/bouquet-bride-bride-and-groom-2253870.jpg"
            }
          ]
        },
        {
          title: "page2",
          code: "page2",
          blocs: [
            {
              type: 'image',
              settings: null,
              data: "https://www.slate.fr/sites/default/files/styles/1060x523/public/bouquet-bride-bride-and-groom-2253870.jpg"
            },
            {
              type: 'text',
              settings: null,
              data: "Mal nous ce éclairé ô ton son de faite pour hélas, flanc et est grande beauté mignard nous. Face demain dont quel la mignard. Des grâces volupté qu'un atrocement contemplons. N'est autour le beauté «la. Le frémir vit le faudra. Et mensonge soeurs a nous dont, décor ce mais l'abri voluptueux la la humain coeur fatuité, coeur et parfaite fin vécu de pauvre. Florentines fait surprise chaque sur, le tete haut l'abri la frémir qu'elle. Fatuité d'un sa lits  aboutit. Elle vois mal tant flanc musculeux promettant gaze. La beauté flots ce long nous il m'appelle trésor de. Excitant grande de somptueux beauté m'appelle de demain. Loisirs le de et somptueux. Le et quel pleure-t-elle comme excitant fatale qu'un de. Et faite genoux parfaite demain ce que ce surtout la, aussi a dans de d'athlete mais charmer de qui. Elle gaze avec d'une et mensonge m'enivre. Ce tournons la pieds humain blaspheme apres-demain suborneur, déplore exquise pleure demain il âme suborneur. Que pour comme corps dont corps extase la, fatale de charmer contemplons le genoux il ce contemplons. Aux fatale qu'elle masque robuste qu'un. Genre nous pleure adorablement est d'athlete vraiment nous, soucieux volupté vaincu trait beauté et ce l'art surtout pieds. Sa ce de pleure souris  volupté loisirs a et. Non vois ce mon a l'amour a flanc cette l'abri, ce a ou grimace mince, promene charme non abondent comme il vit comme. D'une me extase m'appelle nous, et demain est beauté divin bicéphale. Parce corps autour doué aussi moqueur les, cette me flots sournois pauvre gentillesse surtout couronne» faudra, insensé de tournons faite jaillir se qu'elle ce regard, nous visage son flanc ce, quel florentines la la frémir la dans. Véritable faudra apres-demain son les sa nous, sa m'appelle fleuve charmer de encadré décor et lits, de robuste divines monstre nous qui décor ce. M'enivre voici tete d'une fin d'une en. De tete la et de qui. Vaincu face suborneur de de, trôner elle langoureux etre jusqu'aux la vécu fatale ou. Beauté majesté qu'elle et femme et sincere voluptueux renversée. Volupté de mais l'art tournons ce dans, et surtout pleurs flanc pleure n'est mettrait décor. Tout long sincere de beauté de approchons et souris vivre, dont aboutit souris et cette ce la face cette. A que mon avec ce, de mais pieds insensé mais la somptueux pour moqueur, exquise sournois vécu d'un et crispée long, ce tes décor divin toujours d'athlete de, m'enivre charme surprise coeur et. Mettrait mignard couronne» vit n'est mettrait des. Fatuité robuste beauté miraculeux face sournois la ton. Mais approchons la dont un l'amour le, dont par majesté face âme dit elle, langoureux frémir souris ce gaze soucieux l'art c'est demain. Long avec cette etre me un, ce de la de bicéphale renversée d'une ce tes la, majesté pleure toujours mais dans dont ce tes, coeur me exquise couronne» chaque parfaite qu'un grande charmer. Gentillesse d'un quel haut de âme quel robuste grâces, crispée et la trôner donne. Et langoureux grande la."
            },
            {
              type: 'text',
              settings: null,
              data: "Mal nous ce éclairé ô ton son de faite pour hélas, flanc et est grande beauté mignard nous. Face demain dont quel la mignard. Des grâces volupté qu'un atrocement contemplons. N'est autour le beauté «la. Le frémir vit le faudra. Et mensonge soeurs a nous dont, décor ce mais l'abri voluptueux la la humain coeur fatuité, coeur et parfaite fin vécu de pauvre. Florentines fait surprise chaque sur, le tete haut l'abri la frémir qu'elle. Fatuité d'un sa lits  aboutit. Elle vois mal tant flanc musculeux promettant gaze. La beauté flots ce long nous il m'appelle trésor de. Excitant grande de somptueux beauté m'appelle de demain. Loisirs le de et somptueux. Le et quel pleure-t-elle comme excitant fatale qu'un de. Et faite genoux parfaite demain ce que ce surtout la, aussi a dans de d'athlete mais charmer de qui. Elle gaze avec d'une et mensonge m'enivre. Ce tournons la pieds humain blaspheme apres-demain suborneur, déplore exquise pleure demain il âme suborneur. Que pour comme corps dont corps extase la, fatale de charmer contemplons le genoux il ce contemplons. Aux fatale qu'elle masque robuste qu'un. Genre nous pleure adorablement est d'athlete vraiment nous, soucieux volupté vaincu trait beauté et ce l'art surtout pieds. Sa ce de pleure souris  volupté loisirs a et. Non vois ce mon a l'amour a flanc cette l'abri, ce a ou grimace mince, promene charme non abondent comme il vit comme. D'une me extase m'appelle nous, et demain est beauté divin bicéphale. Parce corps autour doué aussi moqueur les, cette me flots sournois pauvre gentillesse surtout couronne» faudra, insensé de tournons faite jaillir se qu'elle ce regard, nous visage son flanc ce, quel florentines la la frémir la dans. Véritable faudra apres-demain son les sa nous, sa m'appelle fleuve charmer de encadré décor et lits, de robuste divines monstre nous qui décor ce. M'enivre voici tete d'une fin d'une en. De tete la et de qui. Vaincu face suborneur de de, trôner elle langoureux etre jusqu'aux la vécu fatale ou. Beauté majesté qu'elle et femme et sincere voluptueux renversée. Volupté de mais l'art tournons ce dans, et surtout pleurs flanc pleure n'est mettrait décor. Tout long sincere de beauté de approchons et souris vivre, dont aboutit souris et cette ce la face cette. A que mon avec ce, de mais pieds insensé mais la somptueux pour moqueur, exquise sournois vécu d'un et crispée long, ce tes décor divin toujours d'athlete de, m'enivre charme surprise coeur et. Mettrait mignard couronne» vit n'est mettrait des. Fatuité robuste beauté miraculeux face sournois la ton. Mais approchons la dont un l'amour le, dont par majesté face âme dit elle, langoureux frémir souris ce gaze soucieux l'art c'est demain. Long avec cette etre me un, ce de la de bicéphale renversée d'une ce tes la, majesté pleure toujours mais dans dont ce tes, coeur me exquise couronne» chaque parfaite qu'un grande charmer. Gentillesse d'un quel haut de âme quel robuste grâces, crispée et la trôner donne. Et langoureux grande la."
            },
            {
              type: 'image',
              settings: null,
              data: "https://www.slate.fr/sites/default/files/styles/1060x523/public/bouquet-bride-bride-and-groom-2253870.jpg"
            },
            {
              type: 'text',
              settings: null,
              data: "Mal nous ce éclairé ô ton son de faite pour hélas, flanc et est grande beauté mignard nous. Face demain dont quel la mignard. Des grâces volupté qu'un atrocement contemplons. N'est autour le beauté «la. Le frémir vit le faudra. Et mensonge soeurs a nous dont, décor ce mais l'abri voluptueux la la humain coeur fatuité, coeur et parfaite fin vécu de pauvre. Florentines fait surprise chaque sur, le tete haut l'abri la frémir qu'elle. Fatuité d'un sa lits  aboutit. Elle vois mal tant flanc musculeux promettant gaze. La beauté flots ce long nous il m'appelle trésor de. Excitant grande de somptueux beauté m'appelle de demain. Loisirs le de et somptueux. Le et quel pleure-t-elle comme excitant fatale qu'un de. Et faite genoux parfaite demain ce que ce surtout la, aussi a dans de d'athlete mais charmer de qui. Elle gaze avec d'une et mensonge m'enivre. Ce tournons la pieds humain blaspheme apres-demain suborneur, déplore exquise pleure demain il âme suborneur. Que pour comme corps dont corps extase la, fatale de charmer contemplons le genoux il ce contemplons. Aux fatale qu'elle masque robuste qu'un. Genre nous pleure adorablement est d'athlete vraiment nous, soucieux volupté vaincu trait beauté et ce l'art surtout pieds. Sa ce de pleure souris  volupté loisirs a et. Non vois ce mon a l'amour a flanc cette l'abri, ce a ou grimace mince, promene charme non abondent comme il vit comme. D'une me extase m'appelle nous, et demain est beauté divin bicéphale. Parce corps autour doué aussi moqueur les, cette me flots sournois pauvre gentillesse surtout couronne» faudra, insensé de tournons faite jaillir se qu'elle ce regard, nous visage son flanc ce, quel florentines la la frémir la dans. Véritable faudra apres-demain son les sa nous, sa m'appelle fleuve charmer de encadré décor et lits, de robuste divines monstre nous qui décor ce. M'enivre voici tete d'une fin d'une en. De tete la et de qui. Vaincu face suborneur de de, trôner elle langoureux etre jusqu'aux la vécu fatale ou. Beauté majesté qu'elle et femme et sincere voluptueux renversée. Volupté de mais l'art tournons ce dans, et surtout pleurs flanc pleure n'est mettrait décor. Tout long sincere de beauté de approchons et souris vivre, dont aboutit souris et cette ce la face cette. A que mon avec ce, de mais pieds insensé mais la somptueux pour moqueur, exquise sournois vécu d'un et crispée long, ce tes décor divin toujours d'athlete de, m'enivre charme surprise coeur et. Mettrait mignard couronne» vit n'est mettrait des. Fatuité robuste beauté miraculeux face sournois la ton. Mais approchons la dont un l'amour le, dont par majesté face âme dit elle, langoureux frémir souris ce gaze soucieux l'art c'est demain. Long avec cette etre me un, ce de la de bicéphale renversée d'une ce tes la, majesté pleure toujours mais dans dont ce tes, coeur me exquise couronne» chaque parfaite qu'un grande charmer. Gentillesse d'un quel haut de âme quel robuste grâces, crispée et la trôner donne. Et langoureux grande la."
            },
            {
              type: 'image',
              settings: null,
              data: "https://www.slate.fr/sites/default/files/styles/1060x523/public/bouquet-bride-bride-and-groom-2253870.jpg"
            },
            {
              type: 'text',
              settings: null,
              data: "Mal nous ce éclairé ô ton son de faite pour hélas, flanc et est grande beauté mignard nous. Face demain dont quel la mignard. Des grâces volupté qu'un atrocement contemplons. N'est autour le beauté «la. Le frémir vit le faudra. Et mensonge soeurs a nous dont, décor ce mais l'abri voluptueux la la humain coeur fatuité, coeur et parfaite fin vécu de pauvre. Florentines fait surprise chaque sur, le tete haut l'abri la frémir qu'elle. Fatuité d'un sa lits  aboutit. Elle vois mal tant flanc musculeux promettant gaze. La beauté flots ce long nous il m'appelle trésor de. Excitant grande de somptueux beauté m'appelle de demain. Loisirs le de et somptueux. Le et quel pleure-t-elle comme excitant fatale qu'un de. Et faite genoux parfaite demain ce que ce surtout la, aussi a dans de d'athlete mais charmer de qui. Elle gaze avec d'une et mensonge m'enivre. Ce tournons la pieds humain blaspheme apres-demain suborneur, déplore exquise pleure demain il âme suborneur. Que pour comme corps dont corps extase la, fatale de charmer contemplons le genoux il ce contemplons. Aux fatale qu'elle masque robuste qu'un. Genre nous pleure adorablement est d'athlete vraiment nous, soucieux volupté vaincu trait beauté et ce l'art surtout pieds. Sa ce de pleure souris  volupté loisirs a et. Non vois ce mon a l'amour a flanc cette l'abri, ce a ou grimace mince, promene charme non abondent comme il vit comme. D'une me extase m'appelle nous, et demain est beauté divin bicéphale. Parce corps autour doué aussi moqueur les, cette me flots sournois pauvre gentillesse surtout couronne» faudra, insensé de tournons faite jaillir se qu'elle ce regard, nous visage son flanc ce, quel florentines la la frémir la dans. Véritable faudra apres-demain son les sa nous, sa m'appelle fleuve charmer de encadré décor et lits, de robuste divines monstre nous qui décor ce. M'enivre voici tete d'une fin d'une en. De tete la et de qui. Vaincu face suborneur de de, trôner elle langoureux etre jusqu'aux la vécu fatale ou. Beauté majesté qu'elle et femme et sincere voluptueux renversée. Volupté de mais l'art tournons ce dans, et surtout pleurs flanc pleure n'est mettrait décor. Tout long sincere de beauté de approchons et souris vivre, dont aboutit souris et cette ce la face cette. A que mon avec ce, de mais pieds insensé mais la somptueux pour moqueur, exquise sournois vécu d'un et crispée long, ce tes décor divin toujours d'athlete de, m'enivre charme surprise coeur et. Mettrait mignard couronne» vit n'est mettrait des. Fatuité robuste beauté miraculeux face sournois la ton. Mais approchons la dont un l'amour le, dont par majesté face âme dit elle, langoureux frémir souris ce gaze soucieux l'art c'est demain. Long avec cette etre me un, ce de la de bicéphale renversée d'une ce tes la, majesté pleure toujours mais dans dont ce tes, coeur me exquise couronne» chaque parfaite qu'un grande charmer. Gentillesse d'un quel haut de âme quel robuste grâces, crispée et la trôner donne. Et langoureux grande la."
            },
            {
              type: 'image',
              settings: null,
              data: "https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/societe/les-mariages-de-lete-incertains-a-cause-du-coronavirus-3963334/54743668-1-fre-FR/Les-mariages-de-l-ete-incertains-a-cause-du-coronavirus.jpg"
            }
          ]
        },
        // {
        //   title: "app",
        //   url: "/app"
        // },
        {
          title: "rsvp",
          code: "rsvp",
          isRsvp:true,
          blocs: [
            {
              type:"rsvp-bloc",
              code:123,
              title:"Infos",
              description:"Qui tu es",
              settings: null,
              data: [
                {
                  type: "input",
                  code: "firstName",
                  label: "Nom"
                },
                {
                  type: "input",
                  code: "lastName",
                  label: "Prénom"
                }
              ]
            },
            {
              type:"rsvp-bloc",
              code:456,
              title:"Disponibilités",
              description:"Qui tu es",
              settings: null,
              data: [
                {
                  type: "select",
                  code: "come-on",
                  label: "Je viens",
                  multiple:true,
                  list:[
                    {
                      label:"Oui",
                      value:"oui"
                    },
                    {
                      label:"Non",
                      value:"non"
                    }
                  ]
                }
              ]
            },
          ]
        }
      ]
    }
    this.myEvents.next([webSite])
  }


}


