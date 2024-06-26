declare namespace NodeJS {
	/*
		NOTE: The naming-convention rule has been disabled for this line because
		ProcessEnv is part of @types/node and can't be renamed to
		iProcessEnv
	 */
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface ProcessEnv {
		NODE_ENV: string;

		PORT: string;

		// Logging config
		LOG_LEVEL: string;
		LOGGING_TRANSPORT_SLACK_WEBHOOK_URL: string;
		LOGGING_TRANSPORT_FILE_LOGS_DIRECTORY: string;
		LOGGING_TRANSPORT_FILE_ERROR_LOG_FILE_NAME: string;
		LOGGING_TRANSPORT_FILE_WARN_LOG_FILE_NAME: string;
		LOGGING_TRANSPORT_FILE_INFO_LOG_FILE_NAME: string;
		LOGGING_TRANSPORT_FILE_HTTP_LOG_FILE_NAME: string;
		LOGGING_TRANSPORT_FILE_VERBOSE_LOG_FILE_NAME: string;
		LOGGING_TRANSPORT_FILE_DEBUG_LOG_FILE_NAME: string;
		LOGGING_TRANSPORT_FILE_SILLY_LOG_FILE_NAME: string;
		LOGGING_TRANSPORT_FILE_COMBINED_LOG_FILE_NAME: string;

		// Database config
		DATABASE_HOST: string;
		DATABASE_PORT: string;
		DATABASE_USER: string;
		DATABASE_USER_PASSWORD: string;
		DATABASE_NAME: string;

		// JWT config
		JWT_SECRET_KEY_FILE_PATH: string;
		JWT_ALGORITHM: string;
		// expressed a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).
		JWT_ACCESS_TOKEN_EXPIRES_IN: string;
		JWT_REFRESH_TOKEN_EXPIRES_IN: string;

		// Email Service Config

		// Transactional Email Config
		EMAIL_SERVICE_TRANSACTIONAL_SMTP_HOST: string;
		EMAIL_SERVICE_TRANSACTIONAL_SMTP_PORT: string;
		EMAIL_SERVICE_TRANSACTIONAL_SMTP_SECURE: string;
		EMAIL_SERVICE_TRANSACTIONAL_SMTP_USERNAME: string;
		EMAIL_SERVICE_TRANSACTIONAL_SMTP_FROM_ADDRESS: string;
		EMAIL_SERVICE_TRANSACTIONAL_SMTP_PASSWORD: string;

		// Marketing Email Config
		EMAIL_SERVICE_MARKETING_SMTP_HOST: string;
		EMAIL_SERVICE_MARKETING_SMTP_PORT: string;
		EMAIL_SERVICE_MARKETING_SMTP_SECURE: string;
		EMAIL_SERVICE_MARKETING_SMTP_USERNAME: string;
		EMAIL_SERVICE_MARKETING_SMTP_FROM_ADDRESS: string;
		EMAIL_SERVICE_MARKETING_SMTP_PASSWORD: string;

		//Reset Password Config
		PASSWORD_RESET_OTP_LENGTH: string;
		RESET_PASSWORD_RETRY_INTERVAL_IN_MINUTES: string;
		RESET_PASSWORD_OTP_VALIDITY_IN_MINUTES: string;

		// Verification Config
		EMAIL_VERIFICATION_OTP_CUSTOM_ALPHABET: string;
		EMAIL_VERIFICATION_OTP_LENGTH: string;
		EMAIL_VERIFICATION_RETRY_INTERVAL_IN_MINUTES: string;
		EMAIL_VERIFICATION_OTP_VALIDITY_IN_MINUTES: string;
	}
}
