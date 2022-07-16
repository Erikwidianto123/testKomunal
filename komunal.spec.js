/// <reference types="cypress" />

describe('Test interview Komunal - Board Game', function() {
    it('Menggerakkan robot kurang dari 15 step di small table game lalu mengecek MoneyEarn nya apakah sudah sama dengan Money Found dikali dengan InterestRate', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        cy.get('.place-button').click()
        cy.get('.App').type(' ')
        for (let i = 1; i <= 14; i++) {
            cy.get('.total-move').then(($elm) => {
                const arr = ['{leftArrow}','{rightArrow}']
                let k = Math.floor(Math.random() * 2);
                cy.get('.App').type(' ')
                let totalMove = $elm.text();
                totalMove = totalMove.substring(12);
                totalMove = parseInt(totalMove);
                const xpoint = 15-i
                if (totalMove != xpoint) {
                    cy.log(totalMove +' != '+ xpoint)
                    cy.get('.App').type(arr[k])
                }              
            })
        }
        cy.get('.statistic-main > :nth-child(1) > p').then(($elm) => {
            cy.get('.statistic-main > :nth-child(2) > p').then(($elm2) => {
                let x1 = $elm2.text();
                x1 = x1.replace("%", "");
                x1 = parseInt(x1);
                let x2 = $elm.text();
                x2 = x2.replace(",", "");
                x2 = x2.replace(",", "");
                x2 = parseInt(x2);
                let totalEarning = ((x1 * x2) / 100) + x2
                cy.get('.statistic-main > :nth-child(3) > p').then(($el) => {
                    let ExpectedtotalEarn = $el.text();
                    ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                    ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                    assert.equal(ExpectedtotalEarn, totalEarning, '== Nilainya harus sama dengan expected result');
                })

            })
        })
    })
    it('Menggerakkan robot kurang dari 15 step di medium table game lalu mengecek MoneyEarn nya apakah sudah sama dengan Money Found dikali dengan InterestRate', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
        cy.get('select').select('medium')
        cy.get('.place-button').click()
        cy.get('.App').type(' ')
        for (let i = 1; i <= 14; i++) {
            cy.get('.total-move').then(($elm) => {
                const arr = ['{leftArrow}','{rightArrow}']
                let k = Math.floor(Math.random() * 2);
                cy.get('.App').type(' ')
                let totalMove = $elm.text();
                totalMove = totalMove.substring(12);
                totalMove = parseInt(totalMove);
                const xpoint = 15-i
                if (totalMove != xpoint) {
                    cy.log(totalMove +' != '+ xpoint)
                    cy.get('.App').type(arr[k])
                }              
            })
        }
        cy.get('.statistic-main > :nth-child(1) > p').then(($elm) => {
            cy.get('.statistic-main > :nth-child(2) > p').then(($elm2) => {
                let x1 = $elm2.text();
                x1 = x1.replace("%", "");
                x1 = parseInt(x1);
                let x2 = $elm.text();
                x2 = x2.replace(",", "");
                x2 = x2.replace(",", "");
                x2 = parseInt(x2);
                let totalEarning = ((x1 * x2) / 100) + x2
                cy.get('.statistic-main > :nth-child(3) > p').then(($el) => {
                    let ExpectedtotalEarn = $el.text();
                    ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                    ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                    assert.equal(ExpectedtotalEarn, totalEarning, '== Nilainya harus sama dengan expected result');
                })

            })
        })
    })
    it('Menggerakkan robot kurang dari 15 step di large table game lalu mengecek MoneyEarn nya apakah sudah sama dengan Money Found dikali dengan InterestRate', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
        cy.get('select').select('large')
        cy.get('.place-button').click()
        cy.get('.App').type(' ')
        for (let i = 1; i <= 14; i++) {
            cy.get('.total-move').then(($elm) => {
                const arr = ['{leftArrow}','{rightArrow}']
                let k = Math.floor(Math.random() * 2);
                cy.get('.App').type(' ')
                let totalMove = $elm.text();
                totalMove = totalMove.substring(12);
                totalMove = parseInt(totalMove);
                const xpoint = 15-i
                if (totalMove != xpoint) {
                    cy.log(totalMove +' != '+ xpoint)
                    cy.get('.App').type(arr[k])
                }              
            })
        }
        cy.get('.statistic-main > :nth-child(1) > p').then(($elm) => {
            cy.get('.statistic-main > :nth-child(2) > p').then(($elm2) => {
                let x1 = $elm2.text();
                x1 = x1.replace("%", "");
                x1 = parseInt(x1);
                let x2 = $elm.text();
                x2 = x2.replace(",", "");
                x2 = x2.replace(",", "");
                x2 = parseInt(x2);
                let totalEarning = ((x1 * x2) / 100) + x2
                cy.get('.statistic-main > :nth-child(3) > p').then(($el) => {
                    let ExpectedtotalEarn = $el.text();
                    ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                    ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                    assert.equal(ExpectedtotalEarn, totalEarning, '== Nilainya harus sama dengan expected result');
                })

            })
        })
    })
    it('Menggerakkan robot sampai game over di small table game lalu mengecek MoneyEarn nya apakah sudah sama dengan Money Found dikali dengan InterestRate', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        cy.get('.place-button').click()
        cy.get('.App').type(' ')
        for (let i = 1; i <= 30; i++) {
            cy.get('.total-move').then(($elm) => {
                const arr = ['{leftArrow}','{rightArrow}']
                let k = Math.floor(Math.random() * 2);
                let totalMove = $elm.text();
                totalMove = totalMove.substring(12);
                totalMove = parseInt(totalMove);
                const xpoint = 15-i
                if (totalMove != xpoint) {
                    cy.get('.App').type(' ')
                    cy.get('.App').type(arr[k])
                }
                cy.log(totalMove)
                if(totalMove == 1) {
                    cy.get('.statistic-main > :nth-child(1) > p').then(($elm) => {
                        cy.get('.statistic-main > :nth-child(2) > p').then(($elm2) => {
                            let x1 = $elm2.text();
                            x1 = x1.replace("%", "");
                            x1 = parseInt(x1);
                            let x2 = $elm.text();
                            x2 = x2.replace(",", "");
                            x2 = x2.replace(",", "");
                            x2 = parseInt(x2);
                            let totalEarning = ((x1 * x2) / 100) + x2
                            cy.get('.statistic-main > :nth-child(3) > p').then(($el) => {
                                let ExpectedtotalEarn = $el.text();
                                ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                                ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                                assert.equal(ExpectedtotalEarn, totalEarning, '== Nilainya harus sama dengan expected result');
                            })            
                        })
                    })
                }              
            })
        }

    })
    it('Menggerakkan robot sampai game over di medium table game lalu mengecek MoneyEarn nya apakah sudah sama dengan Money Found dikali dengan InterestRate', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
        cy.get('select').select('medium')
        cy.get('.place-button').click()
        cy.get('.App').type(' ')
        for (let i = 1; i <= 30; i++) {
            cy.get('.total-move').then(($elm) => {
                const arr = ['{leftArrow}','{rightArrow}']
                let k = Math.floor(Math.random() * 2);
                let totalMove = $elm.text();
                totalMove = totalMove.substring(12);
                totalMove = parseInt(totalMove);
                const xpoint = 15-i
                if (totalMove != xpoint) {
                    cy.get('.App').type(' ')
                    cy.get('.App').type(arr[k])
                }
                cy.log(totalMove)
                if(totalMove == 1) {
                    cy.get('.statistic-main > :nth-child(1) > p').then(($elm) => {
                        cy.get('.statistic-main > :nth-child(2) > p').then(($elm2) => {
                            let x1 = $elm2.text();
                            x1 = x1.replace("%", "");
                            x1 = parseInt(x1);
                            let x2 = $elm.text();
                            x2 = x2.replace(",", "");
                            x2 = x2.replace(",", "");
                            x2 = parseInt(x2);
                            let totalEarning = ((x1 * x2) / 100) + x2
                            cy.get('.statistic-main > :nth-child(3) > p').then(($el) => {
                                let ExpectedtotalEarn = $el.text();
                                ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                                ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                                assert.equal(ExpectedtotalEarn, totalEarning, '== Nilainya harus sama dengan expected result');
                            })            
                        })
                    })
                }              
            })
        }

    })
    it('Menggerakkan robot sampai game over di large table game lalu mengecek MoneyEarn nya apakah sudah sama dengan Money Found dikali dengan InterestRate', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
        cy.get('select').select('large')
        cy.get('.place-button').click()
        cy.get('.App').type(' ')
        for (let i = 1; i <= 30; i++) {
            cy.get('.total-move').then(($elm) => {
                const arr = ['{leftArrow}','{rightArrow}']
                let k = Math.floor(Math.random() * 2);
                let totalMove = $elm.text();
                totalMove = totalMove.substring(12);
                totalMove = parseInt(totalMove);
                const xpoint = 15-i
                if (totalMove != xpoint) {
                    cy.get('.App').type(' ')
                    cy.get('.App').type(arr[k])
                }
                cy.log(totalMove)
                if(totalMove == 1) {
                    cy.get('.statistic-main > :nth-child(1) > p').then(($elm) => {
                        cy.get('.statistic-main > :nth-child(2) > p').then(($elm2) => {
                            let x1 = $elm2.text();
                            x1 = x1.replace("%", "");
                            x1 = parseInt(x1);
                            let x2 = $elm.text();
                            x2 = x2.replace(",", "");
                            x2 = x2.replace(",", "");
                            x2 = parseInt(x2);
                            let totalEarning = ((x1 * x2) / 100) + x2
                            cy.get('.statistic-main > :nth-child(3) > p').then(($el) => {
                                let ExpectedtotalEarn = $el.text();
                                ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                                ExpectedtotalEarn = ExpectedtotalEarn.replace(",", "");
                                assert.equal(ExpectedtotalEarn, totalEarning, '== Nilainya harus sama dengan expected result');
                            })            
                        })
                    })
                }              
            })
        }
    })
    it('Merubah ukuran table dari small game menjadi medium lalu cek total move apakah berhasil direset menjadi 15', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
        cy.get('.place-button').click()
        .wait(2000)
        cy.get('select').select('medium')
        cy.get('.place-button').click()
        cy.get('.total-move').then(($elm) => {
            let totalMove = $elm.text();
            totalMove = totalMove.substring(12);
            assert.equal(15, totalMove, '== totalMove harus sama dengan 15');
        })
    })
    it('Merubah ukuran table game menjadi large lalu cek total move apakah berhasil direset menjadi 15', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
        cy.get('.place-button').click()
        .wait(2000)
        cy.get('select').select('large')
        cy.get('.place-button').click()
        cy.get('.total-move').then(($elm) => {
            let totalMove = $elm.text();
            totalMove = totalMove.substring(12);
            assert.equal(15, totalMove, '== totalMove harus sama dengan 15');
        })
    })
    
    it('Merubah ukuran table game menjadi medium lalu cek total move apakah interest rate nilai nya di range 5% sampai 25%', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
            cy.get('.place-button').click()
            .wait(500)
            cy.get('select').select('medium')
            cy.get('.place-button').click()
            cy.get('.statistic-main > :nth-child(2) > p').then(($elm) => {
                let interestRate = $elm.text();
                interestRate = interestRate.replace("%", "");
                interestRate = parseInt(interestRate);
                expect([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]).to.include(interestRate, 'interest Rate harus di range 5% sampai 25%');
            })
    })
    it('Merubah ukuran table game menjadi small lalu cek total move apakah interest rate nilai nya di range 5% sampai 25%', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
            cy.get('.place-button').click()
            .wait(500)
            cy.get('select').select('small')
            cy.get('.place-button').click()
            cy.get('.statistic-main > :nth-child(2) > p').then(($elm) => {
                let interestRate = $elm.text();
                interestRate = interestRate.replace("%", "");
                interestRate = parseInt(interestRate);
                expect([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]).to.include(interestRate, 'interest Rate harus di range 5% sampai 25%');
            })
    })
    it('Merubah ukuran table game menjadi large lalu cek total move apakah interest rate nilai nya di range 5% sampai 25%', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(1000)
            cy.get('.place-button').click()
            .wait(500)
            cy.get('select').select('large')
            cy.get('.place-button').click()
            cy.get('.statistic-main > :nth-child(2) > p').then(($elm) => {
                let interestRate = $elm.text();
                interestRate = interestRate.replace("%", "");
                interestRate = parseInt(interestRate);
                expect([5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]).to.include(interestRate, 'interest Rate harus di range 5% sampai 25%');
            })
    })
    it('Menekan tombol place lalu memeriksa money yang ada di table game dengan ukuran small', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        cy.get('.place-button').click()
        for (let i = 1; i <= 14; i++) {
            let y = 1
            for (let j = 1; j < 6; j++) {
                for (let i = 1; i < 6; i++) {
                    cy.get('#board-small > :nth-child('+i+') > :nth-child('+j+')').each(($elm, index, $list)=> {
                        let t = $elm.text();
                        if ((t != '‣') && (t != '')) {
                            let moneyRate = $elm.text();
                            moneyRate = moneyRate.replace("$", "");
                            moneyRate = parseInt(moneyRate);
                            if (moneyRate >= 500 && moneyRate <= 20000) {
                                let assertionValue = true;
                                assert.isTrue(assertionValue, 'moneyRate harus diantara $500 sampai $20000');
                            }else {
                                let assertionValue = false;
                                assert.isTrue(assertionValue, 'moneyRate harus diantara $500 sampai $20000');
                            }
                            
                        }
                        y++
                    })
    
                }
            }
        }
    })
    it('Menekan tombol place lalu memeriksa money yang ada di table game dengan ukuran medium', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(500)
        cy.get('select').select('medium')
        .wait(500)
        cy.get('.place-button').click()
        for (let i = 1; i <= 14; i++) {
            let y = 1
            for (let j = 1; j < 8; j++) {
                for (let i = 1; i < 8; i++) {
                    cy.get('#board-medium > :nth-child('+i+') > :nth-child('+j+')').each(($elm, index, $list)=> {
                        let t = $elm.text();
                        if ((t != '‣') && (t != '')) {
                            let moneyRate = $elm.text();
                            moneyRate = moneyRate.replace("$", "");
                            moneyRate = parseInt(moneyRate);
                            if (moneyRate >= 500 && moneyRate <= 20000) {
                                let assertionValue = true;
                                assert.isTrue(assertionValue, 'moneyRate harus diantara $500 sampai $20000');
                            }else {
                                let assertionValue = false;
                                assert.isTrue(assertionValue, 'moneyRate harus diantara $500 sampai $20000');
                            }
                            
                        }
                        y++
                    })
    
                }
            }
        }
    })
    it('Menekan tombol place lalu memeriksa money yang ada di table game dengan ukuran large', function() {
        cy.visit("https://clever-robo-test.netlify.app/")
        .wait(500)
        cy.get('select').select('large')
        .wait(500)
        cy.get('.place-button').click()
        for (let i = 1; i <= 14; i++) {
            let y = 1
            for (let j = 1; j < 10; j++) {
                for (let i = 1; i < 10; i++) {
                    cy.get('#board-large > :nth-child('+i+') > :nth-child('+j+')').each(($elm, index, $list)=> {
                        let t = $elm.text();
                        if ((t != '‣') && (t != '')) {
                            let moneyRate = $elm.text();
                            moneyRate = moneyRate.replace("$", "");
                            moneyRate = parseInt(moneyRate);
                            if (moneyRate >= 500 && moneyRate <= 20000) {
                                let assertionValue = true;
                                assert.isTrue(assertionValue, 'moneyRate harus diantara $500 sampai $20000');
                            }else {
                                let assertionValue = false;
                                assert.isTrue(assertionValue, 'moneyRate harus diantara $500 sampai $20000');
                            }
                            
                        }
                        y++
                    })
    
                }
            }
        }
    })
})
