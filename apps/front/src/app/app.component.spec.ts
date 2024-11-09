import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppComponent,
        NxWelcomeComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome front'
    );
  });

  it(`should have as title 'front'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front');
  });

});
