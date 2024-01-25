"use client";

import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';
import React from 'react';
import { DropdownMenu } from '@/components/ui/dropdown-menu';

interface ServerHeaderProps {
    server: ServerWithMembersWithProfiles;
    role?: MemberRole;
}

const ServerHeader = ({server,role}: ServerHeaderProps) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role == MemberRole.MODERATOR;
  return (
    <DropdownMenu>
        
    </DropdownMenu>
  )
}

export default ServerHeader;