"use client";

import { ServerWithMembersWithProfiles } from '@/types';
import { ChannelType, MemberRole } from '@prisma/client';
import React from 'react';
import { ActionTooltip } from '../action-tooltip';
import { Plus } from 'lucide-react';

interface ServerSectionProps {
    label: string;
    role?: MemberRole;
    sectionType: "channels" | "members";
    channelType?: ChannelType;
    server?: ServerWithMembersWithProfiles;
};

const ServerSection = ({label,role,sectionType,channelType,server}: ServerSectionProps) => {
  return (
    <div className='flex items-center justify-between py-2'>
        <p className='text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400'>{label}</p>
        {role !== MemberRole.GUEST && sectionType === "channels" && (
            <ActionTooltip label='Create Channel' side='top'>
                <button>
                    <Plus className='h-4 w-4'/>
                </button>
            </ActionTooltip>
        )}
    </div>
  )
}

export default ServerSection;