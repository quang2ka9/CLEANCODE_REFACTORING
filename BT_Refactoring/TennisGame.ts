export class TennisGame {
    score: string = '';

    getScore(player1Name: string,
             player2Name: string,
             score1: number,
             score2: number) {
        let tempScore = 0;

        if (score1 == score2) {
            switch (score1) {
                case 0:
                    this.score = "Love-All";
                    break;
                case 1:
                    this.score = "Fifteen-All";
                    break;
                case 2:
                    this.score = "Thirty-All";
                    break;
                case 3:
                    this.score = "Forty-All";
                    break;
                default:
                    this.score = "Deuce";
                    break;

            }
        } else if (score1 >= 4 || score2 >= 4) {
            let minusResult = score1 - score2;
            if (minusResult == 1) this.score = "Advantage player1";
            else if (minusResult == -1) this.score = "Advantage player2";
            else if (minusResult >= 2) this.score = "Win for player1";
            else this.score = "Win for player2";
        } else {
            for (let i = 1; i < 3; i++) {
                if (i == 1) tempScore = score1;
                else {
                    this.score += "-";
                    tempScore = score2;
                }
                switch (tempScore) {
                    case 0:
                        this.score += "Love";
                        break;
                    case 1:
                        this.score += "Fifteen";
                        break;
                    case 2:
                        this.score += "Thirty";
                        break;
                    case 3:
                        this.score += "Forty";
                        break;
                }
            }
        }
    }
}