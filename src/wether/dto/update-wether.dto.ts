import { PartialType } from '@nestjs/mapped-types';
import { CreateWetherDto } from './create-wether.dto';

export class UpdateWetherDto extends PartialType(CreateWetherDto) {}
