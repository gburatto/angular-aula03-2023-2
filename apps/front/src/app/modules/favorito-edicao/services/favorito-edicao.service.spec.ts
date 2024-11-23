import { TestBed } from '@angular/core/testing';

import { FavoritoEdicaoService } from './favorito-edicao.service';

describe('FavoritoEdicaoService', () => {
  let service: FavoritoEdicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritoEdicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
