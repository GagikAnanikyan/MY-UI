import CSS from 'csstype';
import { ColorType, ResponsiveValueType } from '../types';

export interface BorderConfigurableComponent {
  borderColor?: ColorType;
  hoverBorderColor?: ColorType;

  borderStyle?: ResponsiveValueType<CSS.Properties['borderStyle']>;
  borderWidth?: ResponsiveValueType<CSS.Properties['borderWidth']>;
}

export interface FocusableBorderConfigurableComponent {
  focusBorderColor?: ColorType;
  activeBorderColor?: ColorType;
}
