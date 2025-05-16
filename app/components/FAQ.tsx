'use client';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

const faqs = [
    {
        question: 'How do I receive my purchased account?',
        answer: (
            <>
                Youll receive your credentials via email instantly after checkout. Make sure to check your spam or promotions folder if you dont see it in your inbox.
                <br /><br />
                If you experience any delay, our support team is available to assist you promptly.
            </>
        ),
    },
    {
        question: 'Are these accounts authentic and safe?',
        answer: (
            <>
                Yes, all accounts we provide are thoroughly verified to ensure authenticity and safety. We partner only with trusted sources to guarantee quality.
                <br /><br />
                Your privacy is our priority. All account details are securely handled and encrypted during transmission.
            </>
        ),
    },
    {
        question: 'Can I get a refund?',
        answer: (
            <>
                We offer replacements if there’s an issue with your purchase. Refunds are granted in valid cases such as duplicate purchases or inability to access the account.
                <br /><br />
                Please contact our support within 48 hours of purchase with your order details for a quick resolution.
            </>
        ),
    },
    {
        question: 'What payment methods do you accept?',
        answer: (
            <>
                We accept all major credit/debit cards and PayPal for secure and convenient transactions.
                <br /><br />
                For any issues during payment, contact our support for assistance.
            </>
        ),
    },
    {
        question: 'Is customer support available 24/7?',
        answer: (
            <>
                Our support team is available from 10 AM to 12 PM daily. For urgent matters, leave us a message and we will respond as soon as possible.
                <br /><br />
                We aim to provide prompt and helpful assistance to ensure your satisfaction.
            </>
        ),
    },
];

export default function FAQ() {
    return (
        <section className="max-w-7xl mx-auto py-12  w-full p-4">
            <div className="flex items-center justify-center gap-4 mb-10">
                <hr className="flex-grow border border-t border-red-700" />
                <h2 className="text-2xl md:text-3xl font-bold text-center whitespace-nowrap">
                    Frequently Asked Questions
                </h2>
                <hr className="flex-grow border border-t border-cyan-700" />
            </div>
            <div className="space-y-6">
                {faqs.map(({ question, answer }, idx) => (
                    <Collapsible key={idx} defaultOpen={false}>
                        <CollapsibleTrigger className="flex justify-between w-full rounded-md border-2 px-6 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500">
                            {question}
                            <span className="ml-2 text-cyan-500 font-bold text-xl">+</span>
                        </CollapsibleTrigger>
                        <CollapsibleContent className=" border border-t-0 rounded-b-md">
                            <div className="max-w-7xl mx-auto px-6 py-4">
                                {answer}
                            </div>
                        </CollapsibleContent>

                    </Collapsible>
                ))}
            </div>
        </section>
    );
}
