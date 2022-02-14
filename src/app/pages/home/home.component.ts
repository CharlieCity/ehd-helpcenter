import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HomeCard } from 'src/app/shared/interfaces/other.interface';
import { showHidePanel } from '../../shared/animations';
import * as HomePanelActions from '../../store/home-panels/home-panels.actions';
import * as fromStore from '../../store/store.reducers';

@Component({
  animations: [showHidePanel],
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
/* eslint-disable max-len */
export class HomeComponent implements OnInit {
  expansionOpen$: Observable<boolean>;
  expansionMulti$: Observable<boolean>;
  expansionDisabled$: Observable<boolean>;
  categories$: Observable<Array<{name: string; expanded: boolean; }>>;
  cards: Array<HomeCard> = [{
        icon: 'health_and_safety',
        title: 'Newark Health and Wellness | Pre-register for COVID-19 Vaccine',
        link: '',
        parent: '',
        category: 'Information About COVID-19 Vaccines',
        style: {background: 'rgba(144, 238, 144, 0.5)'},
        id: 'newark-vaccine-preregister',
        extUrl: 'https://forms.office.com/Pages/ResponsePage.aspx?id=IDqIJHuvrU6bTJAKINqJM725e6R7vRVLusqxgCFeFMFUOE5ERERGRVNPSjFCRFNKNU1OOUhIVEdHWC4u'
      },
      {
        icon: 'health_and_safety',
        title: 'Vaccine Eligibility and Locations',
        link: '',
        parent: '',
        category: 'Information About COVID-19 Vaccines',
        style: {background: 'rgba(144, 238, 144, 0.25)'},
        id: 'newark-vaccine-sites',
        extUrl: 'https://drive.google.com/file/d/12nYcTx6m7nLWzbGmvlH4RL1flFWhbGEz/view?usp=sharing'
      },
      {
        icon: 'health_and_safety',
        title: 'FEMA | Community Vaccination Center',
        link: '',
        parent: '',
        category: 'Information About COVID-19 Vaccines',
        style: {background: 'rgba(144, 238, 144, 0.15)'},
        id: 'free-vaccine-sites',
        extUrl: 'https://drive.google.com/file/d/19q9GmfGuNjEzx0soT49opRMF5B4lG9FC/view?usp=sharing'
      },
      {
        icon: 'health_and_safety',
        title: 'NJ HEALTH | COVID-19 Vaccines: Know the Facts',
        link: '',
        parent: '',
        category: 'Information About COVID-19 Vaccines',
        id: 'nj-health-facts',
        extUrl: 'https://www.state.nj.us/health/cd/documents/topics/NCOV/COVID19-Vaccines-Know-the-Facts.pdf'
      },
      {
        icon: 'health_and_safety',
        title: 'US CDC | Facts about COVID-19 Vaccines',
        link: '',
        parent: '',
        category: 'Information About COVID-19 Vaccines',
        id: 'cdc-facts',
        extUrl: 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/vaccine-benefits/facts.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fvaccines%2Fabout-vaccines%2Fvaccine-myths.html'
      },
      {
        icon: 'health_and_safety',
        title: 'NJ HEALTH | Back to Normal: All of Our Tools',
        link: '',
        parent: '',
        category: 'Information About COVID-19 Vaccines',
        id: 'nj-health-tools',
        extUrl: 'https://www.nj.gov/health/cd/documents/topics/NCOV/all-of-our-tools.pdf'
      },
      {
        icon: 'people',
        title: 'Benefit Eligibility Chart',
        link: 'eligibility-benefits',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Emergency Fund for 501(c)3 Non-Profits',
        link: 'non-profit',
        parent: '/programs',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'person',
        title: 'Finding an Essential Job During Crisis',
        link: 'finding-essential-jobs',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'local_dining',
        title: 'Food Distribution and School Lunches',
        link: 'food-dist-school-lunches',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'local_hospital',
        title: 'Health Information',
        link: 'health-info',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Measuring COVID-19 Impact',
        link: 'measuring-covid-impact',
        parent: '/programs',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'person',
        title: 'Unemployment Benefits',
        link: 'unemployment-benefits',
        parent: '/resources',
        category: 'Employment & Wellness',
        id: '',
        extUrl: ''
      },
      {
        icon: 'person',
        title: 'Unemployment Benefits for Self-Employed',
        link: '',
        parent: '',
        category: 'Employment & Wellness',
        id: 'self-employed',
        extUrl: 'https://myunemployment.nj.gov/labor/myunemployment/independentcontractors.shtml'
      },
      {
        icon: 'house',
        title: 'Mayor Baraka’s Emergency Rental Assistance Round 3',
        link: 'emergency-rent-grants',
        parent: '/programs',
        category: 'Housing',
        style: {background: 'rgba(144, 238, 144, 0.5)'},
        id: '',
        extUrl: ''
      },
      {
        icon: 'notification_important',
        title: 'Gov. Murphy Extends Residential Utility-Shutoff Moratorium Through March 15th, 2021',
        link: '',
        parent: '',
        category: 'Housing',
        style: {background: 'rgba(144, 238, 144, 0.25)'},
        id: 'utility-shutoff-moratorium',
        extUrl: 'https://nj.gov/infobank/eo/056murphy/pdf/EO-190.pdf'
      },
      {
        icon: 'people',
        title: 'Know Your Rights: Housing Discrimination is Illegal',
        link: '',
        parent: '',
        category: 'Housing',
        style: {background: 'rgba(144, 238, 144, 0.15)'},
        id: 'housing-discrimination',
        extUrl: 'https://drive.google.com/file/d/1FVZzT20wTGv_NNJ0antOCFP-fFFQqvqB/view?usp=sharing'
      },
      {
        icon: 'people',
        title: 'Rent Increase Freeze for Rent Controlled Tenants',
        link: 'rent-increase-freeze',
        parent: '/programs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'house',
        title: 'For Homeowners-Mortgage Relief, Foreclosure FAQs, Forbearances',
        link: 'homeowners',
        parent: '/faqs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Tenant FAQs',
        link: 'tenants',
        parent: '/faqs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'For Housing Authority Tenants',
        link: 'nha-tenants',
        parent: '/resources',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'house',
        title: 'Forgiveable Loans for Homeowners and First-Time Buyers',
        link: 'homeowner-relief',
        parent: '/programs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Safe Housing for Homeless',
        link: 'safe-housing',
        parent: '/programs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Tenant Eviction Moratorium and Other Tenant Information',
        link: 'eviction-moratorium',
        parent: '/programs',
        category: 'Housing',
        id: '',
        extUrl: ''
      },
      {
        icon: 'edit',
        title: 'URGENT- NEW RULES TO FIGHT SURGE IN COVID19',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        style: {background: 'rgba(144, 238, 144, 0.5)'},
        link: 'fight-surge-covid-19',
        parent: '/docs',
        id: '',
        extUrl: ''
      },
      {
        icon: 'campaign',
        title: 'Governor Murphy Extended State of Emergency Another 30 Days (2/17)',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        style: {background: 'rgba(144, 238, 144, 0.25)'},
        id: 'governor-extends-emergency',
        extUrl: 'https://d31hzlhk6di2h5.cloudfront.net/20210217/70/d0/6b/db/4ece0a3831b35ca039b280f0/EO-222.pdf'
      },
      {
        icon: 'edit',
        title: `Mayor's COVID-19 Holiday Executive Order (12/4)`,
        link: 'holiday-executive-order',
        parent: '/docs',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        style: {background: 'rgba(144, 238, 144, 0.15)'},
        id: '',
        extUrl: ''
      },
      {
        icon: 'local_hospital',
        title: 'COVID-19 Testing Sites',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: 'testingflyer',
        extUrl: 'https://drive.google.com/file/d/1loEWk96vint1JdpfBNMBre-KVdduS0V0/view'
      },
      {
        icon: 'edit',
        title: 'Remote Learning Assistance Program',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        link: 'remote-learning-assistance',
        parent: '/docs',
        id: '',
        extUrl: ''
      },
      {
        icon: 'campaign',
        title: 'Holiday Season COVID-19 Guidelines (English)',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: 'covid-holiday-guidelines-en',
        extUrl: 'https://drive.google.com/file/d/1d8NKwo1pN9Ozr2OyH3SIhO8nuqP4o-nU/view?usp=sharing'
      },
      {
        icon: 'campaign',
        title: 'Holiday Season COVID-19 Guidelines (Português)',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: 'covid-holiday-guidelines-pr',
        extUrl: 'https://drive.google.com/file/d/1Bx9jg6d2Oi9q6U4G4HEzo07T_xJ8wy3L/view?usp=sharing'
      },
      {
        icon: 'campaign',
        title: 'Holiday Season COVID-19 Guidelines (Español)',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: 'covid-holiday-guidelines-sp',
        extUrl: 'https://drive.google.com/file/d/1LcOhXMHESMYMecjJP0ZkTg-MP5Pdwq4t/view?usp=sharing'
      },
      {
        icon: 'verified_user',
        title: 'Application & Requirements to Re-Open',
        link: 'reopen-application-requirements',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },

      {
        icon: 'campaign',
        title: 'Emergency Help for Newark Restaurants and Small Business',
        link: 'emergency-help-restaurants',
        parent: '/docs',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.'
      },
      {
        icon: 'campaign',
        title: 'Newark Reopening Guidelines',
        link: 'strikeforce-reopening-plan',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },
      {
        icon: 'campaign',
        title: '#MaskUPNewark',
        link: 'maskup',
        parent: '/docs',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.'
      },
      {
        icon: 'people',
        title: 'Reopening and Recovery Strikeforce',
        link: 'newark-reopening-recovery',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },
      {
        icon: 'verified_user',
        title: '"Phase One" Preparation for Eventual Re-Opening',
        link: 'phase-one',
        parent: '/stayingin',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: '',
        extUrl: ''
      },
      {
        icon: 'info',
        title: 'Newark Municipal Court Accepts Online Payments, Video Hearings',
        link: '',
        parent: '',
        category: 'Save Lives. Stay Healthy. Safely Re-Open.',
        id: 'newark-municipal-court',
        extUrl: 'https://www.newarknj.gov/news/newark-municipal-court-now-holding-video-sessions-via-zoom-court-will-also-accept-online-payments-and-dispute-tickets-online'
      },
      {
        icon: 'business_center',
        title: 'Mayor Baraka\'s Small Business Emergency Grants Round 4',
        link: 'small-business-grants',
        parent: '/programs',
        category: 'Small Business',
        style: {background: 'rgba(144, 238, 144, 0.25)'}
      },
      {
        icon: 'info',
        title: 'Pre-register for New State Small Business Aid',
        category: 'Small Business',
        id: 'expanded-business-aid',
        extUrl: 'https://business.nj.gov/covid/check-status-njeda-small-business-emergency-assistance-grant-program?locale=en',
        style: {background: 'rgba(144, 238, 144, 0.15)'}
      },
      {
        icon: 'business_center',
        title: 'US SBA | Emergency Assistance for Shuttered Venues Affected by COVID-19',
        link: '',
        parent: '',
        category: 'Small Business',
        id: 'sba-svo-grant',
        extUrl: 'https://www.sba.gov/svogrant'
      },
      {
        icon: 'business_center',
        title: 'Updates on Federal PPP & SBA Programs',
        link: 'federal-ppp-sba-update',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'local_hospital',
        title: 'Sell or Buy PPE',
        link: 'ppe-program',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'Help for Commercial Tenants and Property Owners',
        link: 'commercial-prop',
        parent: '/programs',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'INVEST NEWARK for Businesses',
        link: 'invest-newark',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'business_center',
        title: 'N.J. Financial Help for Small Businesses',
        link: 'nj-small-business-help',
        parent: '/resources',
        category: 'Small Business',
        id: '',
        extUrl: ''
      },
      {
        icon: 'people',
        title: 'Recruiting Essential Workers',
        link: 'recruiting-essential-workers',
        parent: '/programs',
        category: 'Small Business',
        id: '',
        extUrl: ''
      }
  ];
  constructor(
    public breakpointObserver: BreakpointObserver,
    private store: Store<fromStore.StoreState>,
    ) {
    this.categories$ = this.store.select(state => state.homePanel.categories);
    this.expansionOpen$ = this.store.select(state => state.homePanel.open);
    this.expansionMulti$ = this.store.select(state => state.homePanel.multi);
    this.expansionDisabled$ = this.store.select(state => state.homePanel.toggleDisabled);
  }
  ngOnInit() {
    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.store.dispatch(new HomePanelActions.SetMulti(false));
        this.store.dispatch(new HomePanelActions.SetOpen(false));
        this.store.dispatch(new HomePanelActions.SetToggle(false));
      } else {
        this.store.dispatch(new HomePanelActions.SetMulti(true));
        this.store.dispatch(new HomePanelActions.SetOpen(true));
        this.store.dispatch(new HomePanelActions.SetToggle(true));
      }
    });
  }
  filterCat(category) {
    return category;
  }
  expandCat(cat: {name: string; expanded: boolean; }) {
    this.store.dispatch(new HomePanelActions.SetExpandedCategory(cat.name));
  }
  goTo(url?: string) {
    if (url) {window.open(url, '_self'); }
  }
}
