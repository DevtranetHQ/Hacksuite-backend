const userService = require("./user.service");
const CustomError = require("./../utils/custom-error");

class IntegrationService {
    async discordEmailCheck(data) {
        if (!data.email) throw new CustomError("email is required");

        const user = await userService.getOneByEmail(data.email);

        if (!user.isVerified) throw new CustomError("User Email is not verified");

        return user;
    }
}

module.exports = new IntegrationService();
