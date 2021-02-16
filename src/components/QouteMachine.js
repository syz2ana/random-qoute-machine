import React from 'react';
import { Card, CardActions, CardContent, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QouteMachine = ({ assignNewQouteIndex, selectedQoute }) => {
    return (
        <Card>
            <CardContent>
                <Typography id="text">
                    {selectedQoute.quote} - <span id="author">{selectedQoute.author}</span>
                </Typography>
            </CardContent>
            <CardActions>
                <Button id="new-quote" size='small' onClick={assignNewQouteIndex}>Next Qoute</Button>
                <IconButton
                    id="tweet-quote"
                    target='_blank'
                    href={encodeURI(`https://twitter.com/intent/tweet/tweet?text=${selectedQoute.quote}`)}>
                    <FontAwesomeIcon size='md' icon={faTwitter}>
                    </FontAwesomeIcon>
                </IconButton>

            </CardActions>
        </Card>
    );
}

export default QouteMachine;