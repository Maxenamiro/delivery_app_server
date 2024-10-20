import { IsEmail, IsString, MinLength } from 'class-validator'

export class RefreshTokenDto {
	//@IsOptional - для необезательнх полей
	@IsString()
	refreshToken: string
}
