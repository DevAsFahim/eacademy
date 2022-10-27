import React, { useContext } from 'react';
import { AccordionContext, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function Faq() {
    return (
        <div>
            <div className="page_banner">
                <h1>FAQ</h1>
            </div>
            <Container className='my-5'>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="0">How do I download my digital Certificate or Diploma?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Once you have completed your purchase, your Digital Certificate/Digital Diploma and Transcript are available to download from the Dashboard of your EAcademy Account. When you are logged in, expand the Your Completed Courses & Claimed Certificates widget. Once expanded, you will then be able to download your Digital Certificate/Diploma and Transcript that you have purchased. </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="1">How can I get rid of an error message?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>If you are receiving an error message such as parse, fatal or syntax error, it is likely that some changes are being made to our site by our IT team. To get rid of the error, you will need to clear your cache. Here are the instructions on how to do so. If this does not work then you may just need to wait a few minutes while our IT team completes their changes and then refresh the page.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="3">How do I refer my friends?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>When you are logged in to EAcademy, you will find a unique link (URL) on the Refer a Friend page (available through your Dashboard).You can share your unique link through social media (available on the page itself), email or any other way, e.g. instant messaging. Your friends must register on EAcademy through your unique link and complete a course within 30 days of registering for you to earn your rewards. Your friend will also be rewarded once they’ve registered through your unique link.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="4">How do I update my payment information?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>To change your payment information linked to your Premium Monthly subscription, you will need to cancel your subscription and resubscribe with the updated information.
                                If you cancel in the middle of your billing cycle, the cancellation will not fully complete until the end of that billing cycle, and you will be unable to restart your subscription until the end of the cycle.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="5">Can I retake an assessment?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body>Yes, if you have failed or wish to attain a higher score, you can retake the assessment. Just go to the assessment module and click on the assessment topic and you will be redirected to the start of the assessment. If you retake an assessment the new result will only save if it is higher than the previous result.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="6">How will I be assessed?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>All courses on EAcademy are self-taught. There is no work to be submitted. Assessments are built into each course and are generally in the format of a quiz. Some courses have assessments throughout. Most have just one at the end. You will come to each assessment as you work through the course. All materials for a course (modules, assessments, extra resources, reading materials, forums) are also accessible from the Modules Listing.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <ContextAwareToggle eventKey="7">When will my lesson start?</ContextAwareToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body>EAcademy courses are designed to be self-paced and self-taught. Therefore you can begin a course when you're ready and study whenever you have the chance. The duration of your study is entirely your decision.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    );
}

export default Faq;