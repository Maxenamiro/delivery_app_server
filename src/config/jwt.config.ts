import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJwtConfig = async (
    configService: ConfigService
): Promise<JwtModuleOprions> => ({
    secret: configService.get('JWT_SECRET')
})
