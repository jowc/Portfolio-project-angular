import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portFolioService;
    constructor(portFolioService: PortfolioService);
    getHello(): string[];
}
