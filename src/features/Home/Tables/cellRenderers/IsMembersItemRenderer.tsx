import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import freeToPlayImg from 'assets/images/free-to-play.png';
import membersImg from 'assets/images/members.png';

export const IsMembersItemRenderer = ({ value }: ICellRendererParams) => {
  const isMembersItem = value;
  return (
    <img
      src={isMembersItem ? membersImg : freeToPlayImg}
      alt={isMembersItem ? 'Members-only' : 'Free-to-play'}
    />
  );
};
