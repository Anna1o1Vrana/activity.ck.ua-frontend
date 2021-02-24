import { Injectable } from '@angular/core';
import { PLACES_TYPES } from '../static/data';
import { IPlacesTypes } from '../static/type';

@Injectable({
  providedIn: 'root'
})
export class FilterByTypeService {
  public types: IPlacesTypes[] = PLACES_TYPES;

  constructor() { }
  public getTypes(categoryId): IPlacesTypes[] {
    const types = [];
    this.types.forEach((type: IPlacesTypes) => {
      if (type.category_id !== categoryId) { return; }
      types.push(type);
    });
    if (types.length === 0) {
      const type = { categoryId, type_id: categoryId, name: categoryId };
      types.push(type);
    }
    return types;
  }
}
