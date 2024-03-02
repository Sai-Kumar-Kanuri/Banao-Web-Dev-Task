import React, { useState } from 'react';
import { Button } from '../ui/button';

const FollowButton = ({ isFollowing, onToggle }) => {
    return (
        <>
            {!isFollowing ? (
                <Button onClick={onToggle} variant="secondary" size="sm" className="hover:bg-gray-400 rounded-full">
                    Follow
                </Button>
            ) : (
                <Button onClick={onToggle} className="rounded-full" size="sm">
                    Followed
                </Button>
            )}
        </>
    );
};

export default FollowButton;
