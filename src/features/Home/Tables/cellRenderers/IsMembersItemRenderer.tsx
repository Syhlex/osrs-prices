import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';

const nonMembersImageSource =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAVFBMVEUAAADo6Ojh4eHc3NzY2NjQ0NDNzc3Ly8vHx8fCwsK+vr64uLi0tLSzs7OsrKyrq6ulpaWgoKCfn5+ZmZmXl5eRkZGOjo6Li4uFhYV/f390dHQ4JBg+AiwvAAAAAXRSTlMAQObYZgAAAIVJREFUeNpdT9sWwjAIo1qoA2zdzV3y///pcVt3nHkBckICRBsAgH6BsPwTM66zDhcJQtNWCTaExm3vCDGGqKrMEu83BmHKjbqymKmkF4gw9cVEPPtD+80Hb2fx4knH6svsxSUNNRhsXWYp5yXQdn6K9mvdsDwugLfrwcC6rxg+VuJ4fa8f8JkKodx5cm0AAAAASUVORK5CYII=';
const membersImageSource =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAABc1JHQgHZySx/AAABHVBMVEX////8/P/93HH72mv82WX62Gb711331Wf61Vz71VP51Fj202D401f600/600z700j20lr50k760kn20VX40U770UT30FP70UL0z1770UH20FH60EP3z1D30Er60EL60EH2z073z0n5z0L5zz/2zkr1zkv4zkD4zj/0zU71zUr1zETzy0vzykn1yz31yzzyykf1yj7yyDvwx0Dvxz7xxjruxUPvxT/txULtxEbwxTjxxTTuxD7sxELwxDPtwz3twTbswTfuwTHrwDTrwDDovznovTjnvTrouy7ouy3muzLnuivlujDnuirmuizmuSzmuibnuSjmuSjnuSXluC7nuCfmuCbkuCrmtyXltybktyfltiXktiXktiTltiE4JBjapE5AAAAAAXRSTlMAQObYZgAAAKVJREFUeNpdj9UOwlAQRG9xd3d3d3co7i7z/59BaFNCOS+7OcnOZAlhAADyC0bUnxjzBZYTG89g2pJyAgyVpFjAbgR01ShTuUwSAUXpKBoEt0MnrtcY5CKhsra4gRA8H/2006xV+5rnB5OD16kRtFsDpfmFy923Ix5vNN/lirGtu/25TCL8FbuCKtYbFh3cxWaVVQDXddnCGhwHoU/bfZYC73V2vgGjTyX386EWZgAAAABJRU5ErkJggg==';

export const IsMembersItemRenderer = ({ value }: ICellRendererParams) => {
  const isMembersItem = value;
  return (
    <img
      src={isMembersItem ? membersImageSource : nonMembersImageSource}
      alt={isMembersItem ? 'Members-only' : 'Free-to-play'}
    />
  );
};