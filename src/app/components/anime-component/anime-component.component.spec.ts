import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeComponentComponent } from './anime-component.component';

describe('AnimeComponentComponent', () => {
  let component: AnimeComponentComponent;
  let fixture: ComponentFixture<AnimeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
