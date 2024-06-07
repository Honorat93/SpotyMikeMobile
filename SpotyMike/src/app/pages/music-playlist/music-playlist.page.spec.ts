import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicPlaylistPage } from './music-playlist.page';

describe('MusicPlaylistPage', () => {
  let component: MusicPlaylistPage;
  let fixture: ComponentFixture<MusicPlaylistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
