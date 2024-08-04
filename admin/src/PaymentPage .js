import React from 'react';
import GooglePayButton from '@google-pay/button-react';

function PaymentPage() {
    const order = {
        amount: '1.00',
        currency: 'IN'
    };

    return (
        <div className="App">
            <h1>React Google Pay Integration</h1>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'stripe',
                                    gatewayMerchantId: 'pk_test_MNKMwKAvgdo2yKOhIeCOE6MZ00yS3mWShu',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '11235541165@okbizaxis',
                        merchantName: 'DECODE SOFTTECH',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '1.00',
                        currencyCode: 'INR',
                        countryCode: 'IN',
                    },
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}
            />
        </div>
    );
}

export default PaymentPage;
