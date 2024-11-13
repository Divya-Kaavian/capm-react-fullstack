using {trialDb as db} from '../db/schema';

@path : '/service/trial'
service trial {

    entity UserData as projection on db.UserDetails;

    entity AdminData as projection on db.AdminDetails;

}