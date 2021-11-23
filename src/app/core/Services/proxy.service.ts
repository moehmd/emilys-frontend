import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable()
export class Proxy {
APIBaseUrl = '';
url = '';
constructor(public api: HttpClient, private common: CommonService) {
this.APIBaseUrl = common.APIUrl; 
}
Authenticate(i_Params_Authenticate: Params_Authenticate) : Observable<User> {
this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Authenticate>(this.url, JSON.stringify(i_Params_Authenticate), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Change_Password(i_Params_Change_Password: Params_Change_Password) : Observable<void> {
this.url = this.APIBaseUrl + '/Change_Password?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Change_Password>(this.url, JSON.stringify(i_Params_Change_Password), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);}));
}
Delete_News(i_Params_Delete_News: Params_Delete_News) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_News?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_News), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Delete_News_source(i_Params_Delete_News_source: Params_Delete_News_source) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_News_source?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_News_source), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Delete_Team_member(i_Params_Delete_Team_member: Params_Delete_Team_member) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Team_member?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Team_member), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Edit_News(i_News: News) : Observable<News> {
this.url = this.APIBaseUrl + '/Edit_News?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_News>(this.url, JSON.stringify(i_News), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_News;}));
}
Edit_News_source(i_News_source: News_source) : Observable<News_source> {
this.url = this.APIBaseUrl + '/Edit_News_source?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_News_source>(this.url, JSON.stringify(i_News_source), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_News_source;}));
}
Edit_Section(i_Section: Section) : Observable<Section> {
this.url = this.APIBaseUrl + '/Edit_Section?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Section>(this.url, JSON.stringify(i_Section), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Section;}));
}
Edit_Team_member(i_Team_member: Team_member) : Observable<Team_member> {
this.url = this.APIBaseUrl + '/Edit_Team_member?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Team_member>(this.url, JSON.stringify(i_Team_member), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Team_member;}));
}
Forgot_Password(i_Params_Forgot_Password: Params_Forgot_Password) : Observable<User> {
this.url = this.APIBaseUrl + '/Forgot_Password?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Forgot_Password>(this.url, JSON.stringify(i_Params_Forgot_Password), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_News_By_Where(i_Params_Get_News_By_Where: Params_Get_News_By_Where) : Observable<News[]> {
this.url = this.APIBaseUrl + '/Get_News_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_News_By_Where>(this.url, JSON.stringify(i_Params_Get_News_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Section_By_OWNER_ID(i_Params_Get_Section_By_OWNER_ID: Params_Get_Section_By_OWNER_ID) : Observable<Section[]> {
this.url = this.APIBaseUrl + '/Get_Section_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Section_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Section_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Section_By_SECTION_ID(i_Params_Get_Section_By_SECTION_ID: Params_Get_Section_By_SECTION_ID) : Observable<Section> {
this.url = this.APIBaseUrl + '/Get_Section_By_SECTION_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Section_By_SECTION_ID>(this.url, JSON.stringify(i_Params_Get_Section_By_SECTION_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Team_member_By_OWNER_ID(i_Params_Get_Team_member_By_OWNER_ID: Params_Get_Team_member_By_OWNER_ID) : Observable<Team_member[]> {
this.url = this.APIBaseUrl + '/Get_Team_member_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Team_member_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Team_member_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_User_By_OWNER_ID(i_Params_Get_User_By_OWNER_ID: Params_Get_User_By_OWNER_ID) : Observable<User[]> {
this.url = this.APIBaseUrl + '/Get_User_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_User_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_User_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Verify_Account(i_Params_Verify_Account: Params_Verify_Account) : Observable<void> {
this.url = this.APIBaseUrl + '/Verify_Account?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Verify_Account>(this.url, JSON.stringify(i_Params_Verify_Account), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);}));
}
Get_User_By_USER_ID(i_Params_Get_User_By_USER_ID: Params_Get_User_By_USER_ID) : Observable<User> {
this.url = this.APIBaseUrl + '/Get_User_By_USER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_User_By_USER_ID>(this.url, JSON.stringify(i_Params_Get_User_By_USER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Section_With_Uploaded_Files(i_Params_Get_Section_With_Uploaded_Files: Params_Get_Section_With_Uploaded_Files) : Observable<Section[]> {
this.url = this.APIBaseUrl + '/Get_Section_With_Uploaded_Files?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Section_With_Uploaded_Files>(this.url, JSON.stringify(i_Params_Get_Section_With_Uploaded_Files), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Team_member_With_Uploaded_Files(i_Params_Get_Team_member_With_Uploaded_Files: Params_Get_Team_member_With_Uploaded_Files) : Observable<Team_member[]> {
this.url = this.APIBaseUrl + '/Get_Team_member_With_Uploaded_Files?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Team_member_With_Uploaded_Files>(this.url, JSON.stringify(i_Params_Get_Team_member_With_Uploaded_Files), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
ContactUsForm(i_Params_ContactUsForm: Params_ContactUsForm) : Observable<void> {
this.url = this.APIBaseUrl + '/ContactUsForm?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_ContactUsForm>(this.url, JSON.stringify(i_Params_ContactUsForm), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);}));
}
MembershipForm(i_Params_MembershipForm: Params_MembershipForm) : Observable<void> {
this.url = this.APIBaseUrl + '/MembershipForm?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_MembershipForm>(this.url, JSON.stringify(i_Params_MembershipForm), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);}));
}
DonationForm(i_Params_DonationForm: Params_DonationForm) : Observable<void> {
this.url = this.APIBaseUrl + '/DonationForm?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_DonationForm>(this.url, JSON.stringify(i_Params_DonationForm), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);}));
}
Get_News_By_Where_Adv(i_Params_Get_News_By_Where: Params_Get_News_By_Where) : Observable<News[]> {
this.url = this.APIBaseUrl + '/Get_News_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_News_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_News_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Activate_Account(i_Params_Activate_Account: Params_Activate_Account) : Observable<User> {
this.url = this.APIBaseUrl + '/Activate_Account?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Activate_Account>(this.url, JSON.stringify(i_Params_Activate_Account), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Uploaded_file(i_Uploaded_file: Uploaded_file) : Observable<Uploaded_file> {
this.url = this.APIBaseUrl + '/Edit_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Uploaded_file>(this.url, JSON.stringify(i_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Uploaded_file;}));
}
Delete_Uploaded_file(i_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
}
export class Params_Authenticate
{
Username: string;
Password: string;
}
export class User
{
USER_ID?: number;
OWNER_ID?: number;
USERNAME: string;
PASSWORD: string;
FULLNAME: string;
USER_TYPE_CODE: string;
IS_ACTIVE?: boolean;
ENTRY_DATE: string;
My_Ticket: string;
memberProfile: Team_member[];
}
export class Team_member
{
TEAM_MEMBER_ID?: number;
MEMBER_NAME: string;
FULLNAME: string;
EMAIL: string;
PASSWORD: string;
POSITION: string;
MAJOR: string;
DESCRIPTION: string;
ADMIN?: boolean;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Uploaded_files: Uploaded_file[];
}
export class Uploaded_file
{
UPLOADED_FILE_ID?: number;
REL_ENTITY: string;
REL_KEY?: number;
REL_FIELD: string;
SIZE?: number;
EXTENSION: string;
STAMP: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_URL: string;
}
export class Params_Change_Password
{
USER_ID: number;
PASSWORD: string;
USERNAME: string;
}
export class Params_Delete_News
{
NEWS_ID?: number;
}
export class Params_Delete_News_source
{
NEWS_SOURCE_ID?: number;
}
export class Params_Delete_Team_member
{
TEAM_MEMBER_ID?: number;
}
export class News
{
NEWS_ID?: number;
TITLE: string;
SUBTITLE: string;
DESCRIPTION: string;
IMG_NAME: string;
IS_DISPLAYABLE?: boolean;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
sources: News_source[];
My_Uploaded_files: Uploaded_file[];
}
export class News_source
{
NEWS_SOURCE_ID?: number;
NEWS_SOURCE_NAME: string;
NEWS_ID?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_News: News;
}
export class Section
{
SECTION_ID?: number;
SECTION_NAME: string;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Uploaded_files: Uploaded_file[];
}
export class Params_Forgot_Password
{
USER_ID: number;
USERNAME: string;
PASSWORD: string;
}
export class Params_Get_News_By_Where
{
OWNER_ID?: number;
TITLE: string;
SUBTITLE: string;
DESCRIPTION: string;
IMG_NAME: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Section_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Section_By_SECTION_ID
{
SECTION_ID?: number;
}
export class Params_Get_Team_member_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_User_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Verify_Account
{
User_ID?: number;
UserName: string;
}
export class Params_Get_User_By_USER_ID
{
USER_ID?: number;
}
export class Params_Get_Section_With_Uploaded_Files
{
sectionId?: number;
}
export class Params_Get_Team_member_With_Uploaded_Files
{
}
export class Params_ContactUsForm
{
msgUser: string;
FirstName: string;
LastName: string;
Address: string;
postalCode: number;
city: string;
type: string;
email: string;
}
export class Params_MembershipForm
{
FirstName: string;
LastName: string;
Address: string;
PostalCode: number;
Email: string;
City: string;
Type: string;
}
export class Params_DonationForm
{
FirstName: string;
LastName: string;
Address: string;
postalCode: number;
city: string;
amount: number;
email: string;
}
export class Params_Activate_Account
{
USER_ID: number;
IS_ACTIVE: boolean;
}
export class Params_Delete_Uploaded_file
{
UPLOADED_FILE_ID?: number;
}
export class Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD
{
REL_ENTITY: string;
REL_KEY?: number;
REL_FIELD: string;
}
export class Action_Result{
ExceptionMsg: string;
}
export class Result_Authenticate extends Action_Result {
My_Result : User;
My_Params_Authenticate : Params_Authenticate;
}
export class Result_Change_Password extends Action_Result {
My_Params_Change_Password : Params_Change_Password;
}
export class Result_Delete_News extends Action_Result {
My_Params_Delete_News : Params_Delete_News;
}
export class Result_Delete_News_source extends Action_Result {
My_Params_Delete_News_source : Params_Delete_News_source;
}
export class Result_Delete_Team_member extends Action_Result {
My_Params_Delete_Team_member : Params_Delete_Team_member;
}
export class Result_Edit_News extends Action_Result {
My_News : News;
}
export class Result_Edit_News_source extends Action_Result {
My_News_source : News_source;
}
export class Result_Edit_Section extends Action_Result {
My_Section : Section;
}
export class Result_Edit_Team_member extends Action_Result {
My_Team_member : Team_member;
}
export class Result_Forgot_Password extends Action_Result {
My_Result : User;
My_Params_Forgot_Password : Params_Forgot_Password;
}
export class Result_Get_News_By_Where extends Action_Result {
My_Result : News[];
My_Params_Get_News_By_Where : Params_Get_News_By_Where;
}
export class Result_Get_Section_By_OWNER_ID extends Action_Result {
My_Result : Section[];
My_Params_Get_Section_By_OWNER_ID : Params_Get_Section_By_OWNER_ID;
}
export class Result_Get_Section_By_SECTION_ID extends Action_Result {
My_Result : Section;
My_Params_Get_Section_By_SECTION_ID : Params_Get_Section_By_SECTION_ID;
}
export class Result_Get_Team_member_By_OWNER_ID extends Action_Result {
My_Result : Team_member[];
My_Params_Get_Team_member_By_OWNER_ID : Params_Get_Team_member_By_OWNER_ID;
}
export class Result_Get_User_By_OWNER_ID extends Action_Result {
My_Result : User[];
My_Params_Get_User_By_OWNER_ID : Params_Get_User_By_OWNER_ID;
}
export class Result_Verify_Account extends Action_Result {
My_Params_Verify_Account : Params_Verify_Account;
}
export class Result_Get_User_By_USER_ID extends Action_Result {
My_Result : User;
My_Params_Get_User_By_USER_ID : Params_Get_User_By_USER_ID;
}
export class Result_Get_Section_With_Uploaded_Files extends Action_Result {
My_Result : Section[];
My_Params_Get_Section_With_Uploaded_Files : Params_Get_Section_With_Uploaded_Files;
}
export class Result_Get_Team_member_With_Uploaded_Files extends Action_Result {
My_Result : Team_member[];
My_Params_Get_Team_member_With_Uploaded_Files : Params_Get_Team_member_With_Uploaded_Files;
}
export class Result_ContactUsForm extends Action_Result {
My_Params_ContactUsForm : Params_ContactUsForm;
}
export class Result_MembershipForm extends Action_Result {
My_Params_MembershipForm : Params_MembershipForm;
}
export class Result_DonationForm extends Action_Result {
My_Params_DonationForm : Params_DonationForm;
}
export class Result_Get_News_By_Where_Adv extends Action_Result {
My_Result : News[];
My_Params_Get_News_By_Where : Params_Get_News_By_Where;
}
export class Result_Activate_Account extends Action_Result {
My_Result : User;
My_Params_Activate_Account : Params_Activate_Account;
}
export class Result_Edit_Uploaded_file extends Action_Result {
My_Uploaded_file : Uploaded_file;
}
export class Result_Delete_Uploaded_file extends Action_Result {
My_Params_Delete_Uploaded_file : Params_Delete_Uploaded_file;
}
export class Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD extends Action_Result {
My_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD : Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD;
}
