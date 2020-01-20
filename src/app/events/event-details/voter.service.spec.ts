import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { Observable, of } from 'rxjs';

describe('VoterService', () => {
    let voterService: VoterService,
    mockHttp;

    beforeEach(() => { // pries kiekviena testa sukuria sviezia instanca
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);  // mock http object

        voterService = new VoterService(mockHttp); // injectina mockhttp
    });

    describe('deleteVoter', () => {

        it('should remove the voter from the list of voters', () => {
            let session = { id: 6, voters: ['joe', 'john']}; // testui reikia sesijos su voteriu arejum ir id ||||| id yra session id
            mockHttp.delete.and.returnValue(of(false)); // pasako mock objektui kokia verte turetu buti grazinta

            voterService.deleteVoter(3, session as ISession, 'joe'); // callina deleteVoter funkcija ir ivedam id, sesija ir userName, kurie reikalingi testui

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });

        it('should call http.delete with the right URL', () => {
            let session = { id: 6, voters: ['joe', 'john']};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, session as ISession, 'joe');

            expect(mockHttp.delete).toHaveBeenCalledWith(`api/events/3/sessions/6/voters/joe`);
        });
    });

    describe('addVoter', () => {

        it('should call http.post with the right URL', () => {
            let session = { id: 6, voters: ['joe']};
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, session as ISession, 'joe');

            expect(mockHttp.post).toHaveBeenCalledWith(`api/events/3/sessions/6/voters/joe`, {}, jasmine.any(Object)); // any object, kai nesvarbu koks objektas gaunamas
        });
    });

});
