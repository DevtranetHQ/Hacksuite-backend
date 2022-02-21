const userService = require("./user.service");
const authService = require("./auth.service");
const CustomError = require("./../utils/custom-error");

class IntegrationService {
    async discordEmailCheck(data) {
        if (!data.email) throw new CustomError("email is required");

        const user = await userService.getOneByEmail(data.email);

        if (!user.isVerified)
            throw new CustomError("User Email is not verified");

        return user;
    }

    async discordResendVerificationEmail(data) {
        if (!data.email) throw new CustomError("email is required");

        await authService.requestEmailVerification(data.email);

        return true;
    }
}

module.exports = new IntegrationService();
