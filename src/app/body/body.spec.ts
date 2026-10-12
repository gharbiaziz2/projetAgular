import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body } from './body';

describe('Body', () => {
  let component: Body;
  let fixture: ComponentFixture<Body>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Body],
    }).compileComponents();

    fixture = TestBed.createComponent(Body);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the friends list', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Ahmed');
    expect(compiled.textContent).toContain('Mariem');
  });
});
