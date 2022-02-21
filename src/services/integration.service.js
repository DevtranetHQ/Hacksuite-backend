const CustomError = require("./../utils/custom-error");

class IntegrationService {
    async discordEmailCheck(data) {
        return true;
    }
}

module.exports = new IntegrationService();
